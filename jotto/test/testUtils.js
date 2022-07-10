
import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, value) => {
     return wrapper.find(`[data-test='${value}']`)
}

export const checkProps = (component, value) => {
     const check = checkPropTypes(component.propTypes, value, "props", component.name)
     expect(check).toBeUndefined()
}