/**
 * Created by luozheao on 2017/8/3.
 */
var Watcher={};
Watcher.prototype = {
    get: function(key) {
        Dep.target = this;
        this.value = data[key];    // 这里会触发属性的getter，从而添加订阅者
        Dep.target = null;
    }
}