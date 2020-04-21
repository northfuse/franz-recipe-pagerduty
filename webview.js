module.exports = (Franz) => {
  function parseIncidents(row) {
    let data = $(row).find(".count-filter span");
    let data0 = data[0].innerHTML.split(" ");
    let data1 = data[1].innerHTML.split(" ");
    let result = {};
    result[data0[1]] = parseInt(data0[0]);
    result[data1[1]] = parseInt(data1[0]);
    return result
  }

  function calculate() {
    let rows = $(".pd-incident-counts-widget").find("td");
    return {
      yours: parseIncidents(rows[0]),
      all: parseIncidents(rows[1])
    }
  }

  function getMessages() {
    const counts = calculate();

    Franz.setBadge(counts.yours.triggered);
  }

  Franz.loop(getMessages);
}
