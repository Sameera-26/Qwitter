<template>
  <h5 class="text-weight-bold q-mx-lg q-my-md">Notifications</h5>

  <q-tabs v-model="tab" class="text-primary">
    <q-tab label="All" name="one" class="tab-1" />
    <q-tab label="Mentions" name="two" class="tab-2" />
  </q-tabs>
  <q-separator />
  <q-page class="absolute-position">
    <q-scroll-area class="absolute fullscreen">
      <q-list clickable spearator padding>
        <q-item class="q-py-sm" to="/haider">
          <q-item-section avatar class="flex q-gutter-x-md">
            <q-icon color="primary" name="fas fa-user" size="md" />
          </q-item-section>
          <q-item-section avatar>
            <q-avatar size="lg">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
            </q-avatar>
          </q-item-section>
        </q-item>
        <!-- ---------------------- -->
        <q-item class="q-mx-xl q-py-sm" to="/haider">
          <div class="text-weight-bold text-body1 q-gutter-x-sm">Elon</div>
          <span class="text-weight-regular text-body1 q-px-sm"
            >followed you
          </span>
        </q-item>
        <!-- REPORT -->
        <q-separator />
        <q-item class="q-py-sm" to="/haider" clickable v-ripple>
          <q-item-section avatar class="flex q-gutter-x-md">
            <q-icon color="primary" name="fas fa-shield" size="md" />
          </q-item-section>
          <span overline class="text-weight-regular text-body1 q-py-sm"
            >We received your report.
          </span>
        </q-item>
        <!-- REPORT -->
        <q-separator />
        <q-item class="q-p-lg" to="/haider" clickable v-ripple>
          <q-item-section avatar class="flex q-gutter-x-md">
            <q-icon color="primary" name="fas fa-shield" size="md" />
          </q-item-section>
          <span overline class="text-weight-regular text-body1 q-py-sm"
            >We received your report.
          </span>
        </q-item>
        <!-- RETWEET -->
        <q-separator />
        <q-item class="q-py-sm" to="/haider" clickable v-ripple>
          <q-item-section avatar class="flex q-gutter-x-md">
            <q-icon color="green" name="fas fa-retweet" size="md" />
          </q-item-section>
          <q-item-section avatar>
            <q-avatar size="lg">
              <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
            </q-avatar>
          </q-item-section>
        </q-item>
        <!-- ---------------------- -->
        <q-item class="q-mx-xl q-py-sm" to="/haider" clickable v-ripple>
          <div class="text-weight-bold text-body1 q-gutter-x-sm">Becky</div>
          <span class="text-weight-regular text-body1 q-px-sm"
            >Retweeted your Qweets
          </span>
        </q-item>
        <q-item class="q-mx-xl q-py-xs" to="/haider" clickable v-ripple>
          <div class="text-weight-regular text-grey-8 text-body1 q-gutter-x-sm">
            King Naseem👑 #AsiaCup2022 #PakVsInd #Pakistan
          </div>
        </q-item>
        <!-- REPORT -->
        <q-separator />
        <q-item class="q-py-sm" to="/haider" clickable v-ripple>
          <q-item-section avatar class="flex q-gutter-x-md">
            <q-icon color="grey-10" name="fas fa-list" size="md" />
          </q-item-section>
          <q-separator />
          <div class="text-weight-bold text-body1 q-py-md q-gutter-x-sm">
            TeslaEvents
          </div>
          <span class="text-weight-regular text-body1 q-py-md q-px-sm"
            >added you to their List
          </span>
          <span class="text-weight-bold text-body1 q-py-md q-px-0">
            5ООО ВTС & 5О,ООО ЕТН
          </span>
        </q-item>
        <!-- LIKED -->
        <q-separator />
        <q-item class="q-py-sm" to="/haider">
          <q-item-section avatar class="flex q-gutter-x-md">
            <q-icon color="pink" name="fas fa-heart" size="md" />
          </q-item-section>
          <q-item-section avatar>
            <q-avatar size="lg">
              <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
            </q-avatar>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar size="lg">
              <img src="https://cdn.quasar.dev/img/avatar6.jpg" />
            </q-avatar>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar size="lg">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
            </q-avatar>
          </q-item-section>
        </q-item>
        <!-- ---------------------- -->
        <q-item class="q-mx-xl q-py-sm" to="/haider">
          <div class="text-weight-bold text-body1 q-gutter-x-sm">Parker.</div>
          <span class="text-weight-regular text-body1 q-px-sm"
            >and 2 others liked your Qweets
          </span>
        </q-item>
        <q-item class="q-mx-xl q-py-xs" to="/haider">
          <div class="text-weight-regular text-grey-8 text-body1 q-gutter-x-sm">
            SETH FREAKIN' ROLLINS👑 #WWE #Wreslemania
          </div>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: "PageNotification",
};
</script>
<style lang="sass">
.tab-1
  right:20%

.tab-2
  left:20%
</style>
