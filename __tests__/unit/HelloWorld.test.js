import HelloWorld from "../../src/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe("HelloWorld.vue", () => {
  it("测试 props", () => {
    const msg = "hello";
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg
      }
    });

    const h2 = wrapper.find("h2");
    expect(h2.exists()).toBe(true);
    expect(h2.text()).toBe(msg);
  });
});
