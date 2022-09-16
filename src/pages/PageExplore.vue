<template>
  <!-- SEARCH SECTION -->
  <q-input
    round
    rounded
    outlined
    class="q-ma-md"
    placeholder="Search Qwitter"
    dense
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
  </q-input>
  <q-img
    src="https://caracoltv.brightspotcdn.com/dims4/default/12baca2/2147483647/strip/true/crop/640x311%200%2057/resize/1440x700!/quality/90/?url=http://caracol-brightspot.s3.amazonaws.com/53/3a/f1179ba64aa384d5903c3049ba0c/abierto-de-estados-unidos.jpg"
    style="height: 380px; max-width: 1000px"
  >
    <div class="text-left q-mt-8">Tennis | LIVE</div>
    <div
      class="absolute-bottom text-left text-justify text-weight-bold text-h5"
    >
      US Upen 2022: Men's and Women's first round
    </div>
  </q-img>
  <q-page class="absolute-position">
    <q-scroll-area class="absolute fullscreen">
      <h5 class="text-weight-bold q-px-md q-my-sm">Trends for you</h5>
      <!-- TRENDS SECTION -->
      <q-list spearator padding>
        <q-item class="q-py-md">
          <q-item-section>
            <span overline class="text-weight-bold text-grey-7"
              >Trending in Pakistan</span
            >
            <q-item-label class="text-weight-bold text-h6"
              >Haider Ali</q-item-label
            >
            <q-item-label overline class="text-grey"
              >1,833 Qtweets</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-icon name="fa fa-ellipsis-h" size="sm" />
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md" to="/dahani" clickable v-ripple>
          <q-item-section>
            <span overline class="text-weight-bold text-grey-7"
              >Trending in Pakistan</span
            >
            <q-item-label class="text-weight-bold text-h6">Dahani</q-item-label>
            <q-item-label overline class="text-grey"
              >17.1K Qtweets</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-icon name="fa fa-ellipsis-h" size="sm" />
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md" to="/sasha" clickable v-ripple>
          <q-item-section>
            <span overline class="text-weight-bold text-grey-7">Trending</span>
            <q-item-label class="text-weight-bold text-h6"
              >Sasha and Naomi</q-item-label
            >
            <q-item-label overline class="text-grey"
              >1,001 Qtweets</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-icon name="fa fa-ellipsis-h" size="sm" />
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md" to="/babar" clickable v-ripple>
          <q-item-section>
            <span overline class="text-weight-bold text-grey-7"
              >Trending in Pakistan</span
            >
            <q-item-label class="text-weight-bold text-h6"
              >Babar Azam</q-item-label
            >
            <q-item-label overline class="text-grey"
              >1,001 Qtweets</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-icon name="fa fa-ellipsis-h" size="sm" />
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md" to="/babar" clickable v-ripple>
          <q-item-section>
            <span overline class="text-weight-bold text-grey-7">
              Politics
              <br class="lt-md" />&bull; Trendings
            </span>
            <q-item-label class="text-weight-bold text-h6"
              >1 Billion</q-item-label
            >
            <q-item-label overline class="text-grey-7"
              >85.1K Qtweets</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-icon name="fa fa-ellipsis-h" size="sm" />
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md" to="/babar" clickable v-ripple>
          <q-item-section>
            <span overline class="text-weight-bold text-grey-7">
              Sports
              <!-- for mobile it will go down -->
              <br class="lt-md" />&bull; Trendings
            </span>
            <q-item-label class="text-weight-bold text-h6"
              >Shane Watson</q-item-label
            >
            <q-item-label overline class="text-grey-7"></q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-icon name="fa fa-ellipsis-h" size="sm" />
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md" to="/babar" clickable v-ripple>
          <q-item-section>
            <span overline class="text-weight-bold text-grey-7">
              Celebrities
              <!-- for mobile it will go down -->
              <br class="lt-md" />&bull; Trendings
            </span>
            <q-item-label class="text-weight-bold text-h6"
              >Angelina Jolie</q-item-label
            >
            <q-item-label overline class="text-grey-7"
              >55550 Qtweets</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-icon name="fa fa-ellipsis-h" size="sm" />
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md" to="/babar" clickable v-ripple>
          <q-item-section>
            <span overline class="text-weight-bold text-grey-7">
              Trendings
            </span>
            <q-item-label class="text-weight-bold text-h6">Udemy</q-item-label>
            <q-item-label overline class="text-grey-7"
              >4745 Qtweets</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-icon name="fa fa-ellipsis-h" size="sm" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: "PageExplore",
};
</script>

<style lang="sass">
.round
  border-radius: 4%
  left: 5%
  border:0
</style>
