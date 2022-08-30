<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="text-black bg-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm"> Qwitter </span>
          <q-icon
            class="q-pa-md lt-md header-icon"
            name="fas fa-dove"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <div class="col">
      <!-- LEFT DRAWER -->
      <q-drawer
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="350"
        :breakpoint="900"
        show-if-above
        v-model="leftDrawerOpen"
        side="left"
        bordered
      >
        <q-icon
          class="q-pa-md q-ml-lg"
          name="fas fa-dove"
          size="md"
          color="primary"
        />
        <!-- NAVIGATION SECTION -->
        <q-list class="q-pa-lg">
          <q-item class="q-mb-sm" to="/" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" size="md" />
            </q-item-section>

            <q-item-section class="text-h6 text-weight-bold"
              >Home</q-item-section
            >
          </q-item>
          <q-item class="q-mb-sm" to="/explore" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fas fa-hashtag" size="md" />
            </q-item-section>
            <q-item-section class="text-h6 text-weight-bold"
              >Explore</q-item-section
            >
          </q-item>
          <q-item class="q-mb-sm" to="/notifications" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fas fa-bell" size="md" />
            </q-item-section>
            <q-item-section class="text-h6 text-weight-bold"
              >Notifications</q-item-section
            >
          </q-item>
          <q-item class="q-mb-sm" to="/messages" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fas fa-envelope" size="md" />
            </q-item-section>
            <q-item-section class="text-h6 text-weight-bold"
              >Messages</q-item-section
            >
          </q-item>

          <q-item class="q-mb-sm" to="/bookmark" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="bookmark" size="md" />
            </q-item-section>
            <q-item-section class="text-h6 text-weight-bold"
              >Bookmarks</q-item-section
            >
          </q-item>
          <q-item class="q-mb-sm" to="/list" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fas fa-list" size="md" />
            </q-item-section>
            <q-item-section class="text-h6 text-weight-bold"
              >Lists</q-item-section
            >
          </q-item>
          <q-item class="q-mb-sm" to="/profile" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fas fa-user" size="md" />
            </q-item-section>
            <q-item-section class="text-h6 text-weight-bold"
              >Profile</q-item-section
            >
          </q-item>
          <q-item class="q-mb-sm" to="/about" flat rounded clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" size="md" />
            </q-item-section>
            <q-item-section class="text-h6 text-weight-bold"
              >About</q-item-section
            >
          </q-item>
          <!-- <q-item
             class="q-mb-sm lt-lg"
            flat
            rounded
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-btn class="glossy" round color="primary" icon="fas fa-plus"/>
            </q-item-section>
          </q-item> -->
          <div>
            <q-btn
              class="full-width text-weight-bold"
              unelevated
              rounded
              size="lg"
              color="primary"
              label="Qweet"
            />
          </div>
        </q-list>
      </q-drawer>
      <!-- RIGHT DRAWER -->
      <q-drawer
        show-if-above
        v-model="rightDrawerOpen"
        :width="500"
        :breakpoint="1400"
        side="right"
        bordered
      >
        <!-- SEARCH SECTION -->
        <q-input
          rounded
          outlined
          class="q-ma-lg"
          placeholder="Search Qwitter"
          dense
          style="max-width: 350px"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-card
          bordered
          class="bg-grey-2 round my-card justify-center"
          style="max-width: 360px"
        >
          <q-card-section>
            <div class="text-h5 text-weight-bold">Trends for you</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <q-list spearator padding>
              <q-item class="q-pa-sm" to="/haider" clickable v-ripple>
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
              <q-item class="q-pa-sm" to="/dahani" clickable v-ripple>
                <q-item-section>
                  <span overline class="text-weight-bold text-grey-7"
                    >Trending in Pakistan</span
                  >
                  <q-item-label class="text-weight-bold text-h6"
                    >Dahani</q-item-label
                  >
                  <q-item-label overline class="text-grey"
                    >17.1K Qtweets</q-item-label
                  >
                </q-item-section>
                <q-item-section side top>
                  <q-icon name="fa fa-ellipsis-h" size="sm" />
                </q-item-section>
              </q-item>
              <q-item class="q-pa-sm" to="/sasha" clickable v-ripple>
                <q-item-section>
                  <span overline class="text-weight-bold text-grey-7"
                    >Trending</span
                  >
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
              <q-item class="q-pa-sm" to="/babar" clickable v-ripple>
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
              <q-item class="q-pa-sm" to="/babar" clickable v-ripple>
                <q-item-section>
                  <span overline class="text-weight-bold text-grey-7">
                    Politics
                    <!-- for mobile it will go down -->
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
              <q-item class="q-pa-sm" to="/babar" clickable v-ripple>
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
              <q-item class="q-pa-sm" to="/babar" clickable v-ripple>
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
            </q-list>
            <q-item class="q-pa-sm" to="/babar" clickable v-ripple>
              <q-item-section>
                <span overline class="text-weight-bold text-grey-7">
                  Trendings
                </span>
                <q-item-label class="text-weight-bold text-h6"
                  >Udemy</q-item-label
                >
                <q-item-label overline class="text-grey-7"
                  >4745 Qtweets</q-item-label
                >
              </q-item-section>
              <q-item-section side top>
                <q-icon name="fa fa-ellipsis-h" size="sm" />
              </q-item-section>
            </q-item>
            <q-item class="q-pa-sm" to="/explore" clickable v-ripple>
              <q-item-section>
                <q-item-label class="text-weight-medium text-h6 text-primary"
                  >Show more</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
        <br />
        <q-card
          bordered
          class="texti my-card justify-center"
          style="max-width: 360px"
        >
          <span class="texti">
            Terms of Service Privacy Policy Cookie Policy Accessibility Ads info
            More © 2022 Twitter, Inc.
          </span>
        </q-card>
      </q-drawer>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
<!-- Mobile Header Icon -->
<style lang="sass">
.header-icon
  position: absolute
  bottom: 0,
  left: 50%,
  transform: translateX(-50%)
.round
  border-radius: 4%
  left: 5%
  border:0
.texti
  left:5%
  text-align-center
</style>
