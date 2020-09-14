import { shallowMount } from "@vue/test-utils";
import TodoList from "../../src/views/TodoList.vue";
import TodoHeader from "../../src/components/TodoHeader.vue";
import Undos from "../../src/components/Undos.vue";

describe("TodoList.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TodoList);
  });

  it("渲染组件, 默认应该包含 TodoHeader 组件, Undos 组件", () => {
    const header = wrapper.findComponent(TodoHeader);
    const undos = wrapper.findComponent(Undos);
    expect(header.exists()).toBe(true);
    expect(undos.exists()).toBe(true);
  });

  it("初始化组件, 默认没有已经完成的和未完成的任务", () => {
    const { dones, undos } = wrapper.vm.$data;
    expect(dones).toEqual([]);
    expect(undos).toEqual([]);
  });

  it("TodoList 监听到 TodoHeader emit 的 add-todo 方法, 自动添加一个 undoItem ", () => {
    // 集成测试:
    // const header = wrapper.findComponent(TodoHeader);
    // const todo = "todo-1";
    // header.vm.$emit("add-todo", todo);
    // expect(wrapper.vm.$data.undos).toEqual([todo]);
    wrapper.setData({ undos: ["a", "b"] });
    wrapper.vm.addUndoItem("c");
    expect(wrapper.vm.$data.undos).toEqual(["a", "b", "c"]);
  });

  it("当触发 deleteUndoItem 这个方法的时候, 应该删除对应的 undos 数据", () => {
    wrapper.setData({
      undos: ["a", "b", "c"]
    });
    const undos = wrapper.findComponent(Undos);
    undos.vm.$emit("delete-undo", 1); // 1: index
    expect(wrapper.vm.$data.undos).toEqual(["a", "c"]);
  });
});
