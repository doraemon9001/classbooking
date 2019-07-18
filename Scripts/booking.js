var app = new Vue({
  el: "#app",
  data: {
    jspClass: [{
        index: 0,
        name: "瑜伽",
        content: "源於古印度文化，義為探尋「梵我一如」的道理與方法，古印度六大哲學派別中有瑜伽派。而現代人所稱的瑜伽則是主要是一系列的修身養心方法，包括調身的體位法（參考瑜伽體位集）、調息的呼吸法、調心的冥想法等，以達至身心的合一。"
      },
      {
        index: 1,
        name: "鹽浴",
        content: "所謂鹽浴，就是用溫水浸濕皮膚後再使用食鹽粉末塗抹在皮膚上進行「洗浴」，而不是人們所說的直接用鹽來按摩、揉搓皮膚。科學實踐證明，鹽水漂浮既可以殺菌消毒，也能健美皮膚，對皮膚清潔、美白、保濕、去痘、防皺具有功效，還能去脂減肥、降低血壓，對皮膚病、關節痛、風濕病有一定療效，對頭髮生長及抗衰老有明顯作用。"
      },
      {
        index: 2,
        name: "有氧",
        content: "有氧運動（英語：Aerobic exercise），又稱有氧訓練、需氧運動、帶氧運動，是一種以提高人體耐力質素，增強心肺功能為目的的體育運動，很多時候也被用作減輕體重。"
      }
    ],
    formData: {
      bookingClass: "請選擇"
    },
    events: [{
        title: "All Day Event",
        start: "2019-07-01"
      },
      {
        title: "Long Event",
        start: "2019-07-07",
        end: "2019-07-10"
      },
      {
        groupId: 999,
        title: "Repeating Event",
        start: "2019-07-09T16:00:00"
      },
      {
        groupId: 999,
        title: "Repeating Event",
        start: "2019-07-16T16:00:00"
      },
      {
        title: "Conference",
        start: "2019-07-11",
        end: "2019-07-13"
      },
      {
        title: "Meeting",
        start: "2019-07-12T10:30:00",
        end: "2019-07-12T12:30:00"
      },
      {
        title: "Lunch",
        start: "2019-07-12T12:00:00"
      },
      {
        title: "Meeting",
        start: "2019-07-12T14:30:00"
      },
      {
        title: "Happy Hour",
        start: "2019-07-12T17:30:00"
      },
      {
        title: "Dinner",
        start: "2019-07-12T20:00:00"
      },
      {
        title: "Birthday Party",
        start: "2019-07-13T07:00:00"
      },
      {
        title: "Click for Google",
        url: "http://google.com/",
        start: "2019-07-28"
      }
    ]
  },
  methods: {
    // 課程下拉框改變事件: 更新課程介紹
    jspClassChange: function () {
      console.log(this.events);
      jQuery('#divTest').html('yyyyyyyyy')
      jQuery("#calendar").fullCalendar("removeEvents");
      jQuery("#calendar").fullCalendar("addEventSource", this.events);
      jQuery("#calendar").fullCalendar("rerenderEvents");
    }
  }
});