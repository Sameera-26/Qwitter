<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
      <q-img
        src="https://th.bing.com/th/id/OIP.qOf0qsImQtc4-kpfxSqVnwHaEK?pid=ImgDet&rs=1"
        style="height: 280px; max-width: 1000px"
      >
      </q-img>
      <div class="pic">
        <q-avatar
          size="xl"
          bordered
          class="pic"
          style="height: 160px; width: 160px"
        >
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
        </q-avatar>
      </div>

      <h5 class="text-weight-bold q-px-xl q-my-xs">Paige</h5>
      <h6 class="text-weight-regular q-px-lg q-my-xs text-grey-9">@diva_wwe</h6>
      <body1 class="text-weight-regular q-px-lg q-my-xs text-grey-9"
        >we are great people! #wwe
      </body1>
      <div class="flex flex-row q-px-lg">
        <body1 class="text-weight-bold q-my-xs text-grey-9">65k</body1>
        <body1 class="text-weight-regular q-my-xs text-grey-9">followers</body1>
        <body1 class="text-weight-bold q-my-xs q-mx-xl text-grey-9">
          2 following
        </body1>
      </div>
      <q-separator class="divider" size="5px" color="grey-2" />

      <q-item v-for="qweet in qweets" :key="qweet.name" class="qweet q-py-md">
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <strong>Paige</strong>
            <span class="text-grey-7">
              @diva_wwe
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
            <q-btn color="pink" size="sm" icon="favorite" flat round> </q-btn>
            <q-btn color="grey" size="sm" icon="share" flat round> </q-btn>
          </div>
        </q-item-section>
        <q-item-section side top>
          <q-icon name="fa fa-thumb-tack" size="xs" />
        </q-item-section>
      </q-item>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { formatDistance } from "date-fns";
export default {
  name: "PageProfile",
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
.pic
  left:2%
  margin-top:-30px
  border-color: "white"
  border-width: 20%
</style>
