export const DataChart1 = {
    labels: [
      "Jan",
      "Fab",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    // Information about the dataset
    datasets: [
      {
        label: "",
        backgroundColor: "transparent",
        borderColor: "#2F80ED",
        data: [
          600,
          700,
          750,
          800,
          760,
          820,
          690,
          740,
          720,
          890,
          776,
          900,
        ],
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "#2F80ED",
        pointBorderColor: "transparent",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 5,
        pointBorderWidth: 5,
        pointRadius: 8,
        pointHoverRadius: 8,
      },
    ],
}

export const OptionsChart1 = {
    tooltips: {
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return {
            backgroundColor: "#ffffff",
          };
        },
      },
      intersect: false,
      backgroundColor: "#f9f9f9",
      titleFontColor: "#8F92A1",
      titleFontSize: 12,
      bodyFontColor: "#171717",
      bodyFontStyle: "bold",
      bodyFontSize: 16,
      multiKeyBackground: "transparent",
      displayColors: false,
      xPadding: 30,
      yPadding: 10,
      bodyAlign: "center",
      titleAlign: "center",
    },

    title: {
      display: false,
    },
    legend: {
      display: false,
    },

    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
            drawTicks: false,
            drawBorder: false,
          },
          ticks: {
            padding: 35,
            max: 1200,
            min: 500,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(143, 146, 161, .1)",
            zeroLineColor: "rgba(143, 146, 161, .1)",
          },
          ticks: {
            padding: 20,
          },
        },
      ],
    },
}


export const DataChart2 = {
    labels: [
      "Jan",
      "Fab",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    // Information about the dataset
    datasets: [
      {
        label: "",
        backgroundColor: "#2F80ED",
        barThickness: 6,
        maxBarThickness: 8,
        data: [
          600,
          700,
          1000,
          700,
          650,
          800,
          690,
          740,
          720,
          1120,
          876,
          900,
        ],
        borderRadius: 100,
        pointBackgroundColor: "#F3F6F8",
        pointHoverBackgroundColor: "#5243AA",
        pointBorderColor: "#F3F6F8",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 5,
        pointBorderWidth: 5,
        pointRadius: 8,
        pointHoverRadius: 8,
      },
    ],
}

export const OptionsChart2 = {
    borderColor: "#F3F6F8",
    borderWidth: 15,
    backgroundColor: "#F3F6F8",
    tooltips: {
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return {
            backgroundColor: "rgba(104, 110, 255, .0)",
          };
        },
      },
      backgroundColor: "#F3F6F8",
      titleFontColor: "#8F92A1",
      titleFontSize: 12,
      bodyFontColor: "#171717",
      bodyFontStyle: "bold",
      bodyFontSize: 16,
      multiKeyBackground: "transparent",
      displayColors: false,
      xPadding: 30,
      yPadding: 10,
      bodyAlign: "center",
      titleAlign: "center",
    },

    title: {
      display: false,
    },
    legend: {
      display: false,
    },

    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
            drawTicks: false,
            drawBorder: false,
          },
          ticks: {
            padding: 35,
            max: 1200,
            min: 0,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
            color: "rgba(143, 146, 161, .1)",
            zeroLineColor: "rgba(143, 146, 161, .1)",
          },
          ticks: {
            padding: 20,
          },
        },
      ],
    },
}

export const LegendChart3 = [
    {'dotColor':'primary-bg','textColor':'text-success','text':'Revenue','textNum':'+25.55%','arrow':'lni-arrow-up'},
    {'dotColor':'purple-bg','textColor':'text-success','text':'Net Profit','textNum':'+45.55%','arrow':'lni-arrow-up'},
    {'dotColor':'orange-bg','textColor':'text-danger','text':'Order','textNum':'-4.2%','arrow':'lni-arrow-down'}
]

export const DataChart3 = {
    labels: [
      "Jan",
      "Fab",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    // Information about the dataset
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "transparent",
        borderColor: "#5243AA",
        data: [80, 120, 110, 100, 130, 150, 115, 145, 140, 130, 160, 210],
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "#5243AA",
        pointBorderColor: "transparent",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 3,
        pointBorderWidth: 5,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
      {
        label: "Profit",
        backgroundColor: "transparent",
        borderColor: "#686EFF",
        data: [
          120,
          160,
          150,
          140,
          165,
          210,
          135,
          155,
          170,
          140,
          130,
          200,
        ],
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "#686EFF",
        pointBorderColor: "transparent",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 3,
        pointBorderWidth: 5,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
      {
        label: "Order",
        backgroundColor: "transparent",
        borderColor: "#FF8730",
        data: [180, 110, 140, 135, 100, 90, 145, 115, 100, 110, 115, 150],
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "#FF8730",
        pointBorderColor: "transparent",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 3,
        pointBorderWidth: 5,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
}

export const OptionsChart3 = {
    tooltips: {
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return {
            backgroundColor: "rgba(104, 110, 255, .0)",
          };
        },
      },
      intersect: false,
      backgroundColor: "#fbfbfb",
      titleFontColor: "#8F92A1",
      titleFontSize: 16,
      titleFontFamily: "Inter",
      titleFontStyle: "400",
      bodyFontColor: "#171717",
      bodyFontSize: 16,
      multiKeyBackground: "transparent",
      displayColors: false,
      xPadding: 30,
      yPadding: 15,
      borderColor: "rgba(143, 146, 161, .1)",
      borderWidth: 1,
      title: false,
    },

    title: {
      display: false,
    },

    layout: {
      padding: {
        top: 0,
      },
    },

    legend: false,

    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
            drawTicks: false,
            drawBorder: false,
          },
          ticks: {
            padding: 35,
            max: 300,
            min: 50,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(143, 146, 161, .1)",
            zeroLineColor: "rgba(143, 146, 161, .1)",
          },
          ticks: {
            padding: 20,
          },
        },
      ],
    },
}

export const LegendChart4 = [
    {'dotColor':'primary-bg','textColor':'text-success','text':'Store Visits','textNum':'+25.55%','textCount':'3456','arrow':'lni-arrow-up'},
    {'dotColor':'danger-bg','textColor':'text-danger','text':'Visitors','textNum':'-2.05%','textCount':'3456','arrow':'lni-arrow-down'},
]

export const DataChart4 = {
    labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun"],
    // Information about the dataset
    datasets: [
      {
        label: "",
        backgroundColor: "#2F80ED",
        barThickness: "flex",
        maxBarThickness: 8,
        data: [600, 700, 1000, 700, 650, 800],
        pointBackgroundColor: "#F3F6F8",
        pointHoverBackgroundColor: "#5243AA",
        pointBorderColor: "#F3F6F8",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 5,
        pointBorderWidth: 5,
        pointRadius: 8,
        pointHoverRadius: 8,
      },
      {
        label: "",
        backgroundColor: "#EB5757",
        barThickness: "flex",
        maxBarThickness: 8,
        data: [690, 740, 720, 1120, 876, 900],
        pointBackgroundColor: "#F3F6F8",
        pointHoverBackgroundColor: "#5243AA",
        pointBorderColor: "#F3F6F8",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 5,
        pointBorderWidth: 5,
        pointRadius: 8,
        pointHoverRadius: 8,
      },
    ],
}

export const OptionsChart4 = {
    borderColor: "#F3F6F8",
    borderWidth: 15,
    backgroundColor: "#F3F6F8",
    tooltips: {
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return {
            backgroundColor: "rgba(104, 110, 255, .0)",
          };
        },
      },
      backgroundColor: "#F3F6F8",
      titleFontColor: "#8F92A1",
      titleFontSize: 12,
      bodyFontColor: "#171717",
      bodyFontStyle: "bold",
      bodyFontSize: 16,
      multiKeyBackground: "transparent",
      displayColors: false,
      xPadding: 30,
      yPadding: 10,
      bodyAlign: "center",
      titleAlign: "center",
    },

    title: {
      display: false,
    },
    legend: {
      display: false,
    },

    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
            drawTicks: false,
            drawBorder: false,
          },
          ticks: {
            padding: 35,
            max: 1200,
            min: 0,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
            color: "rgba(143, 146, 161, .1)",
            zeroLineColor: "rgba(143, 146, 161, .1)",
          },
          ticks: {
            padding: 20,
          },
        },
      ],
    },
}

export const MapMarkers = [
    { name: "Egypt", coords: [26.8206, 30.8025] },
    { name: "Russia", coords: [61.524, 105.3188] },
    { name: "Canada", coords: [56.1304, -106.3468] },
    { name: "Greenland", coords: [71.7069, -42.6043] },
    { name: "Brazil", coords: [-14.235, -51.9253] },
];