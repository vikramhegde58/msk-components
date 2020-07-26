
const module = {
  selectedModule: localStorage.getItem('selected_module') == 'null' ? null : localStorage.getItem('selected_module'),
}

const component = {
  selectedComponent: localStorage.getItem('selected_component') == 'null' ? null : localStorage.getItem('selected_component'),
}

const variant = {
  selectedVariant: localStorage.getItem('selected_variant') == 'null' ? null : localStorage.getItem('selected_variant'),
  variantState: null,
  formFactor: 'desktop',
}

const initialState = {
  ...component,
  ...module,
  ...variant
}

export default initialState;