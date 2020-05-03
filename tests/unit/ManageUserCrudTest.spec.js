import {
  expect
} from 'chai';
import {
  shallowMount
} from '@vue/test-utils';
import testComponent from '../../src/views/ManageUsersCrud.vue';
import store from "../../src/store/index.js";

const wrapper = shallowMount(testComponent)

describe('views/ManageUsersCrud.vue', () => {
  it("has correct component name", () => {
    expect(wrapper.vm.$options.name).equal('ManageUsersCrud')
  });

  it('correctly sets get all endpoint when created', () => {
    let correctEndpoint = store.state.urlStore.baseUrl +
      store.state.urlStore.getUsersUrl;
    expect(wrapper.vm.$data.endpoint).equal(correctEndpoint);
  });

  it('correctly sets get by ID endpoint when created', () => {
    let correctEndpoint = store.state.urlStore.baseUrl +
      store.state.urlStore.getUserByIdUrl;
    expect(wrapper.vm.$data.endpointGetByID).equal(correctEndpoint);
  });

  it('correctly sets update endpoint when created', () => {
    let correctEndpoint = store.state.urlStore.baseUrl;
    expect(wrapper.vm.$data.endpointUpdate).equal(correctEndpoint);
  });

  it('correctly sets the dataRecords when created', () => {
    expect(wrapper.vm.$data.dataRecords).equal(null);
  });

  it('correctly sets the singleRecord when created', () => {
    expect(wrapper.vm.$data.singleRecord).equal(null);
  });

  it('correctly sets the search when created', () => {
    expect(wrapper.vm.$data.search).equal('');
  });

  it('correctly sets showLoadingIcon icon needed for alert', () => {
    expect(wrapper.vm.$data.showLoadingIcon).equal(false);
  });

  it('correctly sets showSuccessAlert boolean needed for alert', () => {
    expect(wrapper.vm.$data.showSuccessAlert).equal(false);
  });

  it('correctly sets showErrorAlert boolean needed for alert', () => {
    expect(wrapper.vm.$data.showErrorAlert).equal(false);
  });

  it("has close method", () => {
    expect(typeof (wrapper.vm.close)).equal('function')
  });

  it("has editItem method", () => {
    expect(typeof (wrapper.vm.editItem)).equal('function')
  });

  it("has save method", () => {
    expect(typeof (wrapper.vm.save)).equal('function')
  });

})