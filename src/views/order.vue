<template>
    <div class="layout">
        <van-tabs v-model="active" sticky swipeable color="#3C644C">
<van-tab title="全部"></van-tab>
<van-tab title="待付款"></van-tab>
<van-tab title="待发货"></van-tab>
<van-tab title="待收货"></van-tab>
<van-tab title="已收货"></van-tab>

        </van-tabs>

    </div>
</template>


<script>
export default {
    data () {
        return {
            active:0
        }
    }
}
</script>