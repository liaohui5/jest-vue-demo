import TodoHeader from "../../src/components/TodoHeader.vue";
import { shallowMount } from "@vue/test-utils";

describe("TodoHeader.vue", () => {
  let wrapper;
  let input;

  beforeEach(() => {
    wrapper = shallowMount(TodoHeader);
    input = wrapper.find("input[data-jest='input']");
  });

  it("TodoHeader dom变化的时候, 提示确认更新", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("TodoHeader 应该包含 input", () => {
    expect(input.exists()).toBe(true);
  });

  it("TodoHeader 中 input 默认值为空字符串", () => {
    expect(wrapper.vm.$data.inputVal).toBe("");
  });

  it("TodoHeader 中 input 双向数据绑定", () => {
    const val = "hello";
    input.setValue(val);
    expect(wrapper.vm.$data.inputVal).toBe(val);
  });

  it("TodoHeader 中 input 内容为空时按下enter, 不能向外触发 add-todo 事件", () => {
    input.setValue("");
    input.trigger("keyup.enter");
    const emits = wrapper.emitted();
    expect(emits["add-todo"]).toBeFalsy();
  });

  it("TodoHeader 中 input 内容不为空时, 向外触发 add-todo 事件, 并且输入input", () => {
    input.setValue("todo-1");
    input.trigger("keyup.enter");
    const emits = wrapper.emitted();
    expect(emits["add-todo"]).toBeTruthy();
    expect(wrapper.vm.$data.inputVal).toBe("");
  });
});
