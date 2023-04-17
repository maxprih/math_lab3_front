<template>
  <div class="container">
    <div>
    <div>
      <input type="radio" v-model="request.integral" id="r11" name="integral" value="FIRST"
             checked>
      <label for="r11">y = x^2</label>
    </div>

    <div>
      <input type="radio" v-model="request.integral" id="r22" name="integral" value="SECOND">
      <label for="r22">y = x^3 - 5x^2 + 3x - 16</label>
    </div>

    <div>
      <input type="radio" v-model="request.integral" id="r33" name="integral" value="THIRD">
      <label for="r33">y = 4x^3 - 5x^2 + 6x - 7</label>
    </div>

    <div>
      <input type="radio" v-model="request.integral" id="r44" name="integral" value="FOURTH">
      <label for="r44">y = x^3 + x^2 - x - 1</label>
    </div>
  </div>
    <br>
    <div>
      <input type="number" v-model="request.a" name="beb" id="input1">
      <label for="tinput1">Левая граница интервала</label>
    </div>
    <br>
    <div>
      <input type="number" v-model="request.b" name="bebr" id="input2">
      <label for="tinput2">Правая граница интервала</label>
    </div>
    <div>
      <p id="errormsg" style="color: red;"> {{ error }}</p>
    </div>
    <br>
    <div>
      <input type="number" v-model="request.epsilon" name="bebr" id="input3">
      <label for="tinput3">Погрешность</label>
    </div>
    <br>
    <div>
    <div>
      <input type="radio" v-model="request.method" id="r1" name="drone" value="LEFT_RECTANGLES_METHOD"
             checked>
      <label for="r1">Метод левых прямоугольников</label>
    </div>

    <div>
      <input type="radio" v-model="request.method" id="r2" name="drone" value="MID_RECTANGLES_METHOD">
      <label for="r2">Метод средних прямоугольников</label>
    </div>

    <div>
      <input type="radio" v-model="request.method" id="r3" name="drone" value="RIGHT_RECTANGLES_METHOD">
      <label for="r3">Метод правых прямоугольников</label>
    </div>

    <div>
      <input type="radio" v-model="request.method" id="r4" name="drone" value="SIMPSONS_METHOD">
      <label for="r4">Метод Симпсона</label>
    </div>

    <div>
      <input type="radio" v-model="request.method" id="r5" name="drone" value="TRAPEZOIDAL_METHOD">
      <label for="r5">Метод трапеций</label>
    </div>
  </div>
    <button @click="postInt">lets go</button>
    <p> sectors: {{ res.sectors}}</p>
    <p> answer: {{ res.answer}}</p>
    <p> error: {{ res.error}}</p>
    <pre>{{ res.logs }}</pre>
  </div>
</template>

<script>

import pointService from '@/services/point.service';

export default {
  name: 'HelloWorld',
  data() {
    return {
      res: [],
      beb: 0,
      request: {
        integral: "FIRST",
        a: 0,
        b: 2,
        epsilon: 0.01,
        method: "LEFT_RECTANGLES_METHOD"
      },
      error: ""
    };
  },
  methods: {
    postInt() {
      if (Number(this.request.a) >= Number(this.request.b)) {
        console.log("lol")
        this.error = "Левая граница должна быть меньше правой"
        return;
      }
      if (Number(this.request.epsilon) <= 0) {
        this.error = "Погрешность должна быть больше нуля"
        return;
      }
      pointService.postReq(this.request)
        .then(response => {
          this.error = ""
          this.res = response.data;
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container3 {
  height: 10em;
  position: relative
}

/* 1 */
div.container3 p {
  margin: 0;
  position: absolute;
  /* 2 */
  top: 50%;
  /* 3 */
  transform: translate(0, -50%)
}

</style>
