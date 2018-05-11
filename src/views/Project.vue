<template>
  <div v-if="project" class="pt-6 sm:pt-12 -mb-6 sm:mb-0 fade-in">
    <h1>{{ projectTitle }}</h1>
    <div class="text-lg -mt-6 mb-12 -mx-2">
      <span class="inline-block pr-4 border-r-2 border-grey-light m-2">{{ projectDate }}</span>
      <a :href="projectLink" target="_blank" rel="noopener" class="inline-link m-2">{{ prettyProjectLink }}</a>
    </div>
    <div v-for="contentBlock in projectContent" v-html="contentBlock" class="content-block mb-12 md:mb-16" />
  </div>
</template>

<script>
export default {
  props: ['projects', 'uid'],
  name: 'Project',
  metaInfo() {
    if (this.project) {
      return {
        title: this.projectTitle
      };
    }
    return { title: '' };
  },
  computed: {
    project: function() {
      const uid = this.uid;
      function theProject(project) {
        return project.uid === uid;
      }
      if (this.projects) {
        return this.projects.find(theProject);
      }
      return null;
    },
    projectTitle: function() {
      return this.project.data.title;
    },
    projectDate: function() {
      const date = this.project.data.date;
      const month = date.substring(5, 7);
      let year = date.substring(2, 4);
      let season = '';
      if (month < 3) {
        season = 'Winter';
        year = --year + '/' + ++year;
      } else if (month == 12) {
        season = 'Winter';
        year = year + '/' + ++year;
      } else if (month < 6 && month > 2) {
        season = 'Spring';
      } else if (month < 9 && month > 5) {
        season = 'Summer';
      } else if (month < 12 && month > 8) {
        season = 'Fall';
      }
      return season + " '" + year;
    },
    projectLink: function() {
      return this.project.data.link;
    },
    prettyProjectLink: function() {
      return this.projectLink.replace('https://', '').replace('http://', '');
    },
    projectContent: function() {
      const PrismicDOM = require('prismic-dom');

      const projectContent = this.project.data.body.map(function(slice) {
        switch (slice.slice_type) {
          case 'text':
            return PrismicDOM.RichText.asHtml(slice.primary.text);
          case 'image':
            return `
              <figure class="-mx-2 sm:mx-0 lg:-mx-12">
                <img src="${slice.primary.image.url}" />
                <figcaption>${slice.primary.image_description}</figcaption>
              </figure>
          `;
          case 'video':
            return `
              <figure class="lg:-mx-12">
                <video loop autoplay poster="${slice.primary.poster.url}">
                  <source src="${slice.primary.video.url}" type="video/mp4">
                </video>
                <figcaption>${slice.primary.video_description}</figcaption>
              </figure>
          `;
          case 'left-side_image':
            return `
              <div class="flex flex-wrap items-center -mx-4">
                <figure class="w-full md:w-1/2 px-4 md:pr-12">
                  <img src="${slice.primary.image.url}"/>
                  <figcaption>${slice.primary.image_description}</figcaption>
                </figure>
                <div class="w-full md:w-1/2 px-4">
                  ${PrismicDOM.RichText.asHtml(slice.primary.text)}
                </div>
              </div>
          `;
          case 'right-side_image':
            return `
              <div class="flex flex-wrap flex-col-reverse md:flex-row items-center -mx-4">
                <div class="w-full md:w-1/2 px-4">
                  ${PrismicDOM.RichText.asHtml(slice.primary.text)}
                </div>
                <figure class="w-full md:w-1/2 md:pl-12 px-4">
                  <img src="${slice.primary.image.url}"/>
                  <figcaption>${slice.primary.image_description}</figcaption>
                </figure>
              </div>
          `;
          case 'image_gallery':
            return `
              <figure>
                <div class="flex flex-wrap sm:flex-no-wrap items-center -mx-2 lg:-mx-14 -my-1">
                  ${slice.items
                    .map(function(item) {
                      return `<div class="mx-2 my-1"><img src=${item.gallery_image.url} /></div>`;
                    })
                    .join('')}
                </div>
                <figcaption>${slice.primary.gallery_description}</figcaption>
              </figure>`;
        }
      });

      return projectContent;
    }
  }
};
</script>

<style>

</style>
