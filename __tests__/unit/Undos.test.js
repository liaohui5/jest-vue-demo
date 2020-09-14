import { shallowMount } from "@vue/test-utils";
import Undos from "../../src/components/Undos.vue";

describe("Undos.vue", () => {
  test("渲染 Undos 组件, list 默认为 [], 且 count 为 0", () => {
    const wrapper = shallowMount(Undos);
    expect(wrapper.vm.list).toEqual([]);

    const counter = wrapper.find("[data-jest='count']");
    expect(counter.text()).toBe("0");

    const items = wrapper.findAll("[data-jest='undo-item']");
    expect(items.length).toBe(0);
  });

  test("list 为 [1,2,3], 且 count 为 3, 且显示对应的列表和删除按钮", () => {
    const wrapper = shallowMount(Undos, {
      propsData: {
        list: [1, 2, 3]
      }
    });
    const counter = wrapper.find("[data-jest='count']");
    expect(counter.text()).toBe("3");

    const items = wrapper.findAll("[data-jest='undo-item']");
    expect(items.length).toBe(3);
  });

  test("Undos 的删除按钮点击时, 向外触发 delete-undo 事件", () => {
    const wrapper = shallowMount(Undos, {
      propsData: {
        list: [1, 2, 3]
      }
    });

    const deleteBtn = wrapper.findAll("[data-jest='delete-btn']").at(1);
    deleteBtn.trigger("click");

    const emits = wrapper.emitted();
    expect(emits["delete-undo"]).toBeTruthy();
  });
});
