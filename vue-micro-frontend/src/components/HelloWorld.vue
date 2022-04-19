<template>
<div>
    <h1>vue-microfrotend is running</h1>
   <p style="color: red" >Current Microfrontend URL: <b>{{url}}</b></p>
</div>

</template>

<script>
export default {
  data: function() {
        return {
            url: window.location.href
        }
    },
}
</script>
