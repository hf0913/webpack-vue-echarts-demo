<template>
    <div style="overflow: auto;width: 100%;height: 100%;white-space: nowrap;">
        <div
            class="p-relative inline-block bg-white echart"
            v-for="(item, index) of myValue"
            :key="item.key"
        >
            <div
                class="delete flex-center p-absolute"
                @click="deleteItem(index, item)"
            >
                <i class="icon-minus">一</i>
            </div>
            <div
                :id="`${pre}${item.key}`"
                :style="{
                    width: item.width || '700px',
                    height: item.height || '400px',
                    paddingRight: '22px'
                }"
            ></div>
        </div>
    </div>
</template>

<script>
import * as Echarts from 'echarts/index';

export default {
    props: {
        value: {
            required: true,
            type: Array
        }
    },
    data() {
        return {
            pre: 'Maple-Echarts-',
            myValue: []
        };
    },
    mounted() {
        this.updateEcharts();
    },
    methods: {
        deleteItem(index, item) {
            this.myValue.splice(index, 1);
            this.$emit('on-delete-after', {
                item,
                index
            });
        },
        updateEcharts() {
            const { value, pre, $nextTick } = this;

            this.myValue = value;
            $nextTick(() => {
                for (const item of value.values()) {
                    Echarts.init(
                        document.querySelector(`#${pre}${item.key}`)
                    ).setOption(item.option);
                }
            });
        }
    },
    watch: {
        value() {
            this.updateEcharts();
        },
        myValue(v) {
            this.$emit('input', v);
        }
    }
};
</script>

<style scoped>
.p-relative {
    position: relative;
}
.p-absolute {
    position: absolute;
}
.inline-block {
    display: inline-block;
}
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.bg-white {
    background: white;
}
.delete {
    width: 20px;
    height: 20px;
    background: #c0c4cc;
    top: 0;
    right: 0;
    z-index: 1208;
}
.delete:hover {
    cursor: pointer;
    background: #606266;
}
.icon-minus {
    font-size: 12px;
    color: white;
}
.icon-minus:hover {
    color: #f56c6c;
}
.echart {
    margin: 0 4px;
}
</style>
