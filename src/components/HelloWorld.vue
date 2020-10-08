<template>
  <div class="hello">
    <div class="qrcode" ref="qrCodeUrl"></div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      name: "HelloWorld",
      props: {
        msg: String
      }
    };
  },
  methods: {
    creatQrCode() {
      return new QRCode(this.$refs.qrCodeUrl, {
        text: "test", // 需要转换为二维码的内容
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  },
  mounted() {
    const qrcode = this.creatQrCode();
    setInterval(() => {
      qrcode.clear();
      qrcode.makeCode("test" + Date.now());
      console.log(Date.now());
    }, 2000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
