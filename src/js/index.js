var controller = new ScrollMagic.Controller({
  globalSceneOptions: { triggerHook: "onEnter", duration: "200%" },
});

// build scenes
new ScrollMagic.Scene({ triggerElement: "#parallax1" })
  .setTween("#parallax1 > div", { y: "80%", ease: Linear.easeNone })
  .addIndicators()
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: "#parallax2" })
  .setTween("#parallax2 > div", { y: "80%", ease: Linear.easeNone })
  .addIndicators()
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: "#parallax3" })
  .setTween("#parallax3 > div", { y: "80%", ease: Linear.easeNone })
  .addIndicators()
  .addTo(controller);

const dataPie = {
  labels: ["JavaScript", "Python", "Ruby"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(133, 105, 241)",
        "rgb(164, 101, 241)",
        "rgb(101, 143, 241)",
      ],
      hoverOffset: 4,
    },
  ],
};

const configPie = {
  type: "pie",
  data: dataPie,
  options: {},
};

var chartBar = new Chart(document.getElementById("chartPie"), configPie);
