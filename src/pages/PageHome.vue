<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            bottom-slots
            v-model="newQweetContent"
            placeholder="What's Happening"
            counter
            maxlength="280"
            autogrow
            class="new-qweet"
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            @click="addNewQweet"
            :disable="!newQweetContent"
            class="q-mb-lg"
            unelevated
            no-caps
            rounded
            color="primary"
            label="Qweet"
          />
        </div>
        <!-- autogrow  input vertically with max length of 280 -->
      </div>
      <q-separator class="divider" size="10px" color="grey-2" />
      <q-list separator>
        <!-- adding animation to qweets -->
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item
            v-for="qweet in qweets"
            :key="qweet.name"
            class="qweet q-py-md"
          >
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <strong>Sameera Alam</strong>
                <span class="text-grey-7">
                  @alamsameera26
                  <!-- for mobile it will go down -->
                  <br class="lt-md" />&bull; {{ qweet.name }}
                </span>
              </q-item-label>
              <q-item-label class="qweet-content">
                {{ qweet.content }}
              </q-item-label>

              <div class="qweet-icons row justify-between q-mt-sm">
                <q-btn color="grey" size="sm" icon="far fa-comment" flat round>
                </q-btn>
                <q-btn color="grey" size="sm" icon="fas fa-retweet " flat round>
                </q-btn>
                <q-btn color="pink" size="sm" icon="favorite" flat round>
                </q-btn>
                <q-btn color="grey" size="sm" icon="share" flat round> </q-btn>
                <q-btn
                  @click="deleteQweet(qweet)"
                  color="grey"
                  size="sm"
                  icon="fas fa-trash"
                  flat
                  round
                >
                </q-btn>
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { formatDistance } from "date-fns";
export default {
  name: "PageHome",
  data() {
    return {
      newQweetContent: "",
      qweets: [
        {
          content: "Its barca vs real madrid! #football | #barcaforvever",
          name: "30/05/2022",
        },
        {
          content: "Be your own kind of beautiful. #quoteoftheday",
          name: "12/02/2022",
          img: "https://pbs.twimg.com/media/FGq2AU4X0AUoiaL?format=jpg&name=large",
        },
        {
          content: "Follow your dreams! #motivation",
          name: "12/06/2022",
        },
        {
          content: "Nothing is bigger than Imgaination.",
          name: "10/05/2022",
        },
        {
          content:
            "Educate enough to know the difference between right and wrong.",
          name: "12/02/2022",
        },
        {
          content: "Its Windy outisde. Enjoy the cold breze ;)",
          name: "12/02/2022",
        },
        {
          content: "Cheers to people, who are kind in this cruel world.",
          name: "12/02/2022",
        },
      ],
    };
  },
  // ADDING NEW QWEET
  methods: {
    addNewQweet() {
      console.log("addNewQweet");
      let newQweet = {
        content: this.newQweetContent,
        date: Date.now(),
      };
      // FOR SHIFT NEW TWEET ON TOP
      this.qweets.unshift(newQweet);
      this.newQweetContent = ""; //this will erase the content after qweeting
    },
    deleteQweet(qweet) {
      console.log("Delete Qweet:", qweet);
      let datetoDelete = qweet.date;
      // loop thru whole qweets
      let index = this.qweets.findIndex((qweet) => qweet.date === datetoDelete);
      console.log("index", index);
      // (the index, one at time)
      this.qweets.splice(index, 1);
    },
  },
  // FILTERING THE DATE FORMAT,"FILTER" DOES NOT WORK IN VUE-3 SO USE "COMPUTED",
  // BUT RIGHT NOW ITS NOT WORKING FOR ME.
  computed: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
  },
};
</script>
<style lang="sass">
.new-qweet
  textarea

    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4

.qweet-content
  white-space: pre-line
.qweet-icons
  margin-left: -5px
  // for adding separator below first child
.qweet:null(:first-child)
  border-top: 1pc solid rgba(0, 0, 0, 0.12)
</style>
