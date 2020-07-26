import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import modules from '../src/modules'
import ModulesList from './components/modules-list'
import LayoutArea from './components/layout-area'
import LayoutToolbar from './components/layout-toolbar'
import ComponentsList from './components/components-list'
import VariantsList from './components/variants-list'

const App = () => {

  const dispatch = useDispatch();

  const {
    selectedModule,
    selectedComponent,
    selectedVariant
  } = useSelector((state) => {
    return {
      selectedModule: state.selectedModule,
      selectedComponent: state.selectedComponent,
      selectedVariant: state.selectedVariant
    };
  });
  return (
    <div>
      <ModulesList modules={modules} />
      <LayoutToolbar />
      {selectedModule && <ComponentsList components={modules[selectedModule].components} />}
      {selectedComponent && <VariantsList selectedComponent={modules[selectedModule].components[selectedComponent]} />}
      {selectedVariant && <LayoutArea
        Variant={modules[selectedModule].components[selectedComponent].variants[selectedVariant]} />}
    </div>
  )
}

export default App;