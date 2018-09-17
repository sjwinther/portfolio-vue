<template>
  <div v-if="loading"></div>
  <div v-else-if="project" class="pt-6 sm:pt-12 -mb-6 sm:mb-0 fade-in">
    <h1>{{ projectTitle }}</h1>
    <div class="sm:flex -mt-6 mb-12 -mx-2">
      <span class="block sm:border-r-2 border-grey-light sm:pr-4 m-2">{{ projectDate }}</span>
      <span class="block m-2"><a :href="projectLink" target="_blank" rel="noopener" class="inline-link">{{ prettyProjectLink }}</a></span>
    </div>
    <div v-for="contentBlock in projectContent" v-html="contentBlock" class="content-block mb-12 md:mb-16" />
  </div>
  <missing-page v-else />
</template>

<script>
import MissingPage from "./404";

export default {
  name: "Project",
  props: ["projects", "loading", "uid"],
  components: {
    MissingPage
  },
  metaInfo() {
    if (this.project) {
      return {
        title: this.projectTitle
      };
    }
    return { title: "" };
  },
  computed: {
    project() {
      if (this.projects) {
        return this.projects[
          this.projects.findIndex(project => project.uid === this.uid)
        ];
      }
      return null;
    },
    projectTitle() {
      return this.project.data.title;
    },
    projectDate() {
      const date = this.project.data.date;
      const month = date.substring(5, 7);
      let year = date.substring(2, 4);
      let season = "";
      if (month < 3) {
        season = "Winter";
        year = --year + "/" + ++year;
      } else if (month == 12) {
        season = "Winter";
        year = year + "/" + ++year;
      } else if (month < 6 && month > 2) {
        season = "Spring";
      } else if (month < 9 && month > 5) {
        season = "Summer";
      } else if (month < 12 && month > 8) {
        season = "Fall";
      }
      return season + " '" + year;
    },
    projectLink() {
      return this.project.data.link;
    },
    prettyProjectLink() {
      return this.projectLink.replace("https://", "").replace("http://", "");
    },
    projectContent() {
      const PrismicDOM = require("prismic-dom");

      const projectContent = this.project.data.body.map(function(slice) {
        switch (slice.slice_type) {
          case "text":
            return PrismicDOM.RichText.asHtml(slice.primary.text);
          case "image":
            return `
              <figure class="-mx-2 sm:mx-0 lg:-mx-12">
                <picture>
                  <source srcset="${
                    slice.primary.image.url
                  }" media="(min-width: 576)" />
                  <img src="${
                    slice.primary.image.sm.url
                  }" alt="${slice.primary.image_description}" />
                </picture>
                <figcaption>${slice.primary.image_description}</figcaption>
              </figure>
          `;
          case "video":
            return `
              <figure class="lg:-mx-12">
                <video loop autoplay poster="${slice.primary.poster.url}">
                  <source src="${slice.primary.video.url}" type="video/mp4">
                </video>
                <figcaption>${slice.primary.video_description}</figcaption>
              </figure>
          `;
          case "left-side_image":
            return `
              <div class="flex flex-wrap items-center -mx-4">
                <figure class="w-full md:w-1/2 px-4 md:pr-12">
                  <picture>
                    <source srcset="${
                      slice.primary.image.url
                    }" media="(min-width: 576px)" />
                    <img src="${
                      slice.primary.image.sm.url
                    }" alt="${slice.primary.image_description}" />
                  </picture>
                  <figcaption>${slice.primary.image_description}</figcaption>
                </figure>
                <div class="w-full md:w-1/2 px-4">
                  ${PrismicDOM.RichText.asHtml(slice.primary.text)}
                </div>
              </div>
          `;
          case "right-side_image":
            return `
              <div class="flex flex-wrap flex-col-reverse md:flex-row items-center -mx-4">
                <div class="w-full md:w-1/2 px-4">
                  ${PrismicDOM.RichText.asHtml(slice.primary.text)}
                </div>
                <figure class="w-full md:w-1/2 md:pl-12 px-4">
                  <picture>
                    <source srcset="${
                      slice.primary.image.url
                    }" media="(min-width: 576px)" />
                    <img src="${
                      slice.primary.image.sm.url
                    }" alt="${slice.primary.image_description}" />
                  </picture>
                  <figcaption>${slice.primary.image_description}</figcaption>
                </figure>
              </div>
          `;
          case "image_gallery":
            return `
              <figure>
                <div class="flex items-center -mx-2 lg:-mx-14">
                  ${slice.items
                    .map(function(item) {
                      return `
                        <div class="mx-2">
                          <picture>
                            <source srcset="${
                              item.gallery_image.url
                            }" media="(min-width: 576px)" />
                            <img src="${item.gallery_image.sm.url}" />
                          </picture>
                        </div>`;
                    })
                    .join("")}
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
