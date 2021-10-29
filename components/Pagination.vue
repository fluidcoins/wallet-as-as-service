<template>
  <div class="flex items-center">
    <div class="w-16">
      <select v-model="pager" @change="paginate" class="small">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
    </div>
    <div class="flex-1">
      <div class="flex justify-center items-center space-x-8 ">
        <ChevronRightMost class="left-chevron" v-if="hasPrevious" @click="pageNumber = 1" role="button"/>
        <ChevronRight class="left-chevron" v-if="hasPrevious" @click="pageNumber = pageNumber - 1" role="button" />
        <div class="flex space-x-2">
          <div
            v-if="currentPage > 1"
            role="button"
            class="px-5 py-2 text-center rounded-md border border-primary text-primary"
            @click="pageNumber = getPerviousPage"
          >
            {{ getPerviousPage }}
          </div>
          <div

            role="button"
            class="px-5 py-2 text-center rounded-md border bg-primary text-white"
            @click="pageNumber = currentPage + 1"
          >
            {{ currentPage }}
          </div>
          <div
            v-if="totalPages >= 2 && showLastPage"
            role="button"
            class="px-5 py-2 text-center rounded-md border border-primary text-primary"
            @click="pageNumber = getNextPage"
          >
           {{ getNextPage }}
          </div>

          <template v-if="showLastPage && !lastPageInSight">
            <div
              class="px-3 py-2 text-center rounded-md border border-primary"
            >
              <Ellipsis />
            </div>

            <div
              role="button"
              class="px-5 py-2 text-center rounded-md border border-primary"
              :class="{
                'bg-primary text-white': isCurrentPage(totalPages),
                'text-primary': !isCurrentPage(totalPages),
              }"
            @click="pageNumber = totalPages"
            >
              {{ totalPages }}
            </div>
          </template>
        </div>
        <ChevronRight v-if="hasNext" @click="pageNumber = pageNumber + 1" role="button" />
        <ChevronRightMost v-if="hasNext" @click="pageNumber = totalPages" role="button"/>
      </div>
    </div>
  </div>
</template>

<script>
import Ellipsis from "~/assets/svg/paginate-dot.svg";
import ChevronRight from "~/assets/svg/chevron-right.svg";
import ChevronRightMost from "~/assets/svg/chevrons-right.svg"

export default {
  name: "Pagination",
  components: {
    Ellipsis,
    ChevronRight,
    ChevronRightMost
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 20,
    }
  },
  data() {
    return {
      pager: this.perPage,
      pageNumber: this.currentPage
    }
  },
  watch: {
    pageNumber(newValue) {
      if(newValue !== this.currentPage){
        this.paginate()
      }
    }
  },
  methods: {
    isCurrentPage(page) {
      return this.currentPage === page;
    },
    paginate(){
      this.$emit('update-page', {
        page: this.pageNumber,
        per_page: this.pager
      })
    },
  },
  computed: {
    hasPrevious() {
      return this.currentPage > 1
    },
    hasNext(){
      if (this.currentPage === this.totalPages) return false
      return this.currentPage * this.perPage < this.total
    },
    totalPages(){
      return Math.ceil(this.total / this.perPage)
    },
    getNextPage(){
      if(this.currentPage < this.totalPages){
        return this.currentPage + 1
      }

      return this.totalPages
    },
    getPerviousPage(){
      if(this.currentPage > 1){
        return this.currentPage - 1
      }

      return 1
    },
    showLastPage(){
      return this.pageNumber < this.totalPages
    },
    lastPageInSight(){
      return this.getNextPage === this.totalPages
    }
  },
};
</script>

<style lang="css" scoped>
.left-chevron {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  width: 24px;
  height: 24px;
  display: block;
}
</style>
