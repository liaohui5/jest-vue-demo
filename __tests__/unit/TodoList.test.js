import { shallowMount } from "@vue/test-utils";
import TodoList from "../../src/views/TodoList.vue";
import TodoHeader from "../../src/components/TodoHeader.vue";

describe("TodoList.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TodoList);
  });

  it("渲染组件, 默认应该包含 TodoHeader 组件", () => {
    const header = wrapper.findComponent(TodoHeader);
    expect(header.exists()).toBe(true);
  });

  it("初始化组件, 默认没有已经完成的和未完成的任务", () => {
    const { dones, undos } = wrapper.vm.$data;
    expect(dones).toEqual([]);
    expect(undos).toEqual([]);
  });

  it("TodoList 监听到 TodoHeader emit 的 add-todo 方法, 自动添加一个 undoItem ", () => {
    const header = wrapper.findComponent(TodoHeader);
    const todo = "todo-1";
    header.vm.$emit('add-todo', todo);
    expect(wrapper.vm.$data.undos).toEqual([todo]);
  });
});
