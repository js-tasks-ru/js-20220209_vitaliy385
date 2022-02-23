export default class ColumnChart {
  chartHeight = 50;

  constructor(obj) {
    if (obj) {
      this.data = obj.data ? obj.data : [];
      this.label = obj.label ? obj.label : null;
      this.value = obj.value ? obj.value : null;
      this.link = obj.link ? obj.link : null;
      this.formatHeading = obj.formatHeading ? obj.formatHeading : null; // `$${data}`
    } else {
      this.data = [];
      this.label = null;
      this.value = null;
      this.link = null;
      this.formatHeading = null;
    }
    this.render();
    this.initEventListeners();
  }

  getFormatHeading() {
    if (this.formatHeading) {
      return this.formatHeading(this.value);
    }
    return this.value;
  }

  getColumns() {

    let result = '';
    const max = Math.max.apply(null, this.data);
    const k = (this.chartHeight / max).toFixed(2);
    for (const element of this.data) {
      result += `<div style="--value: ${Math.floor(element * k)}" data-tooltip="${(element * 100 / max).toFixed()}%"></div>`;
    }
    return result;

  }

  getTemplate() {
    return `
        <div class="column-chart ${this.data.length === 0 ? 'column-chart_loading' : ''}" style="--chart-height: ${this.chartHeight}">
          <div class="column-chart__title">${this.label}
            ${this.link ? `<a class="column-chart__link" href="${this.link}">View all</a>` : ''}</div>
        <div class="column-chart__container">
         <div data-element="header" class="column-chart__header">${this.getFormatHeading()}</div>
           <div data-element="body" class="column-chart__chart">
              ${this.getColumns()}
            </div>`;
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();

  }

  initEventListeners() {

  }

  update(data) {
    this.data = data;
    this.getTemplate();
  }


  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.wrapper = wrapper.firstElementChild;

    this.element = this.wrapper;
  }

}

// const obj = new ColumnChart();
// console.log(obj.getTemplate())

// obj.destroy()
// console.log(obj);
