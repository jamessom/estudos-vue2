import componentFactory from '@/__mocks__/componentFactory';
import faker from 'faker';
import InputBase from './InputBase.vue';

describe('src/components/InputBase.vue', () => {
  describe('when component is mounted', () => {
    const snapshotTest = componentFactory({ component: InputBase });

    it('should renders correctly', () => {
      expect(snapshotTest.wrapper().element).toMatchSnapshot();
    });
  });

  describe('create componente with default props', () => {
    const propsData = {
      label: faker.random.word(),
      inputPlaceholder: faker.random.words(),
    };

    const factory = componentFactory({
      component: InputBase,
      componentOptions: {
        propsData,
      },
    });

    it('should create a input component with label text', () => {
      expect(factory.wrapper().props().label).toBe(propsData.label);
    });

    it('should create a input component with default type', () => {
      expect(factory.wrapper().props().inputType).toBe('text');
    });

    it('should create a input component with placeholder text', () => {
      expect(factory.wrapper().props().inputPlaceholder).toBe(propsData.inputPlaceholder);
    });

    it('should create a input component with default control class', () => {
      expect(factory.wrapper().props().controlClass).toBe('control');
    });

    it('should create a input component with default input class', () => {
      expect(factory.wrapper().props().inputClass).toBe('input');
    });
  });

  describe('create components and change default props', () => {
    const propsData = {
      label: faker.random.word(),
      inputType: faker.helpers.randomize([
        'email', 'text', 'password', 'number',
      ]),
      inputPlaceholder: faker.random.words(),
      controlClass: faker.random.word(),
      inputClass: faker.random.word(),
    };

    const factory = componentFactory({
      component: InputBase,
      componentOptions: {
        propsData,
      },
    });

    it('should create a input component with label text', () => {
      expect(factory.wrapper().props().label).toBe(propsData.label);
    });

    it('should create a input component with type', () => {
      expect(factory.wrapper().props().inputType).toBe(propsData.inputType);
    });

    it('should create a input component with placeholder text', () => {
      expect(factory.wrapper().props().inputPlaceholder).toBe(propsData.inputPlaceholder);
    });

    it('should create a input component with control class', () => {
      expect(factory.wrapper().props().controlClass).toBe(propsData.controlClass);
    });

    it('should create a input component with input class', () => {
      expect(factory.wrapper().props().inputClass).toBe(propsData.inputClass);
    });
  });
});
