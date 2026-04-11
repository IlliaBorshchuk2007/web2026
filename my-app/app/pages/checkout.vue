<template>
  <div class="wrapper">
    <h1 class="top">Checkout</h1>

    <div class="container">

      <!-- ЛІВА КАРТКА -->
      <div class="plan">
        <h3>Team - Annual</h3>
        <p class="small">3-days free then:</p>
        <h1>$207.50<span>/month</span></h1>
        <p class="small">billed yearly at $2,490</p>

        <p class="save">$498 in savings</p>

        <ul>
          <li>✔ Primary user + 2 free team members</li>
          <li>✔ Save unlimited properties</li>
          <li>✔ 50,000 exports</li>
          <li>✔ 1,000 free skip traces</li>
        </ul>
      </div>

      <!-- ПРАВА ЧАСТИНА -->
      <div class="form">
        <h3>Order Summary</h3>

        <div class="summary">
          <p><span>Annual Plan</span><span>$2490.00</span></p>
          <p><span>Total Due</span><span>$2490.00</span></p>
          <p class="bold"><span>Due Today</span><span>$0.00</span></p>
        </div>

        <h3>Billing Information</h3>

        <form @submit.prevent="submitForm">
          <input v-model="form.card" placeholder="Card Number" required />

          <div class="row">
            <input v-model="form.date" placeholder="MM/YY" required />
            <input v-model="form.cvc" placeholder="CVC" required />
          </div>

          <input v-model="form.name" placeholder="Full name" required />
          <input v-model="form.address" placeholder="Address" required />

          <label class="check">
            <input type="checkbox" v-model="form.agree" required />
            I agree to Terms
          </label>

          <button type="submit">Try It Free</button>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
const form = ref({
  card: '',
  date: '',
  cvc: '',
  name: '',
  address: '',
  agree: false
})

const submitForm = async () => {
  try {
    await $fetch('/api/subscription/create', {
      method: 'POST',
      body: form.value
    })

    alert('Успішно 🚀')
  } catch (e) {
    alert('Помилка ❌')
  }
}
</script>

<style scoped>
.wrapper {
  padding: 40px;
  background: #f4f6f8;
  min-height: 100vh;
}

.top {
  text-align: center;
  margin-bottom: 30px;
  color: #111;
}

.container {
  display: flex;
  gap: 30px;
  justify-content: center;
}

/* ЛІВА */
.plan {
  width: 320px;
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  border-top: 4px solid #22c55e;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
}

.plan h1 {
  font-size: 28px;
  color: #111;
}

.plan span {
  font-size: 14px;
  color: #666;
}

.small {
  font-size: 12px;
  color: #777;
}

.save {
  color: #16a34a;
  font-weight: bold;
  margin: 10px 0;
}

.plan li {
  margin: 6px 0;
  color: #333;
}

/* ПРАВА */
.form {
  width: 380px;
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
}

.summary p {
  display: flex;
  justify-content: space-between;
  color: #333;
}

.bold {
  font-weight: bold;
}

/* INPUT */
input {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  color: #111;
}

.row {
  display: flex;
  gap: 10px;
}

/* CHECK */
.check {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  font-size: 13px;
  color: #333;
}

/* BUTTON */
button {
  margin-top: 18px;
  width: 100%;
  padding: 14px;
  background: #f59e0b;
  color: #fff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
}

button:hover {
  background: #d97706;
}
</style>
