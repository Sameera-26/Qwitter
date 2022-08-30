<template>
  <q-page class="1-pa-lg">
    <h5 class="text-weight-bold">NOTIFICATIONS</h5>
    <q-list spearator padding>
      <q-item class="q-pa-sm flex flex-row" to="/haider" clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="fas fa-user" size="md" />
        </q-item-section>
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
          </q-avatar>
        </q-item-section>
      </q-item>
      <q-item class="q-pa-sm" to="/dahani" clickable v-ripple>
        <q-item-section>
          <span overline class="text-weight-bold text-grey-7"
            >Trending in Pakistan</span
          >
          <q-item-label class="text-weight-bold text-h6">Dahani</q-item-label>
          <q-item-label overline class="text-grey">17.1K Qtweets</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-icon name="fa fa-ellipsis-h" size="sm" />
        </q-item-section>
      </q-item>
      <q-item class="q-pa-sm" to="/sasha" clickable v-ripple>
        <q-item-section>
          <span overline class="text-weight-bold text-grey-7">Trending</span>
          <q-item-label class="text-weight-bold text-h6"
            >Sasha and Naomi</q-item-label
          >
          <q-item-label overline class="text-grey">1,001 Qtweets</q-item-label>
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
          <q-item-label overline class="text-grey">1,001 Qtweets</q-item-label>
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

      <q-item class="q-pa-sm" to="/babar" clickable v-ripple>
        <q-item-section>
          <span overline class="text-weight-bold text-grey-7"> Trendings </span>
          <q-item-label class="text-weight-bold text-h6">Udemy</q-item-label>
          <q-item-label overline class="text-grey-7">4745 Qtweets</q-item-label>
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
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "PageNotification",
};
</script>
