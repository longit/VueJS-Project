<template>
    <div class="b__main">
        <h1>Main content </h1>
        <div class="b__form" style="width: 500px;margin: 0 auto;">
            <div>
                <b-form-select v-model="selected" :options="options"></b-form-select>
                <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
            </div>
        </div>
        <div>
            <div class="b____but">
                <b-button variant="success" v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button>
                <b-sidebar id="sidebar-backdrop" title="Sidebar with backdrop" :backdrop-variant="variant" backdrop shadow>
                    <div class="px-3 py-2">
                        <b-form-group label="Backdrop variant" label-for="backdrop-variant">
                            <b-form-select id="backdrop-variant" v-model="variant" :options="variants"></b-form-select>
                        </b-form-group>
                    </div>
                </b-sidebar>
            </div><!-- end b___but-->
            <div class="b__pagination">
                <div class="overflow-auto">
                    <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router align="center"></b-pagination-nav>
                </div>
            </div><!-- end .b__pagination-->
            <div class="b__iconsvg" style="font-size: 4rem;">
                <b-icon icon="bar-chart-fill"></b-icon>
                <b-icon icon="bar-chart-fill" flip-h></b-icon>
                <b-icon icon="bar-chart-fill" flip-v></b-icon>
                <b-icon icon="bar-chart-fill" flip-h flip-v></b-icon>
            </div><!-- end .b__iconsvg-->
        </div>  
        <Slider />
    </div>
</template>
<script>
import Slider from './Slider.vue'
export default {
  components: { Slider },

}
</script>