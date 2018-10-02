export default ({sliderMinValue, sliderMaxValue}) => {
  return `
    <div class='slider-values'>
      <div class='slider-min-value'>
        <span>Min. price: $</span>
        <span class='text-muted'>${ sliderMinValue }</span>
      </div>

      <div class='slider-max-value'>
        <span>Max. price: $</span>
        <span class='text-muted'>${ sliderMaxValue }</span>
      </div>
    </div>
  `;
};