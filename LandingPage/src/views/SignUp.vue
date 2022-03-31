<template>
  <div class="demo1">
    <p class="ml-3 mb-2">
      Hesabınız varsa lütfen <router-link to="login">giriş yapın.</router-link>
    </p>
    <div class="row">
      <div class="p-3 demo">
        <form class="col-md-12">
          <div class="myprofile-form-div">
            <div class="row">
              <div class="col-md-3 bold">
                {{ $t("signUpPage").firstName }}<b class="required">*</b>
              </div>
              <div class="col-md-3">
                <input
                  type="text"
                  class="form-control"
                  v-model="firstName"
                  :class="!$v.firstName.required ? `error-input` : ``"
                />
                <div
                  class="error"
                  v-if="!$v.firstName.required && submitStatus == 'ERROR'"
                >
                  * First name is required.
                </div>
              </div>
              <div class="col-md-2 bold">
                {{ $t("signUpPage").lastName }}<b class="required">*</b>
              </div>
              <div class="col-md-4">
                <input type="text" class="form-control" v-model="lastName" />
                <div
                  class="error"
                  v-if="!$v.lastName.required && submitStatus == 'ERROR'"
                >
                  * Last name is required.
                </div>
              </div>
            </div>
          </div>
          <div class="myprofile-form-div">
            <div class="row">
              <div class="col-md-3 bold">
                {{ $t("signUpPage").job }}
              </div>
              <div class="col-md-3">
                <input type="text" class="form-control" v-model="job" />
              </div>
              <div class="col-md-2 bold">
                {{ $t("signUpPage").phoneNumber }}
              </div>
              <div class="col-md-4">
                <input class="form-control" type="text" v-model="phoneNumber" />
                <div
                  class="error"
                  v-if="!$v.phoneNumber.numeric && submitStatus == 'ERROR'"
                >
                  * Please enter valid phone number.
                </div>
              </div>
            </div>
          </div>
          <div class="myprofile-form-div">
            <div class="row">
              <div class="col-md-3 bold">
                {{ $t("signUpPage").country }}<b class="required">*</b>
              </div>
              <div class="col-md-3">
                <select
                  type="text"
                  class="form-control test-control"
                  @change="onChangeCountry"
                  v-model="country"
                >
                  <option
                    v-for="country in countries"
                    :key="country.iso2"
                    :value="country.id"
                  >
                    {{ country.name }}
                  </option>
                </select>
                <div
                  class="error"
                  v-if="!$v.country.required && submitStatus == 'ERROR'"
                >
                  * Country is required.
                </div>
              </div>
              <div class="col-md-2 bold">
                {{ $t("signUpPage").city }}<b class="required">*</b>
              </div>
              <div class="col-md-4">
                <select v-model="city" class="form-control test-control">
                  <option
                    v-for="city in cities"
                    :key="city.id"
                    :value="city.id"
                  >
                    {{ city.name }}
                  </option>
                </select>
                <div
                  class="error"
                  v-if="!$v.city.required && submitStatus == 'ERROR'"
                >
                  * City is required.
                </div>
              </div>
            </div>
          </div>
          <div class="myprofile-form-div">
            <div class="row">
              <div class="col-md-3 bold">
                {{ $t("signUpPage").userType }}<b class="required">*</b>
              </div>
              <div class="col-md-3">
                <select class="form-control test-control" v-model="userType">
                  <option value="investor">
                    {{ $t("signUpPage").investor }}
                  </option>
                  <option value="entrepreneur">
                    {{ $t("signUpPage").entrepreneur }}
                  </option>
                </select>
                <div
                  class="error"
                  v-if="!$v.firstName.required && submitStatus == 'ERROR'"
                >
                  * User Type is required.
                </div>
              </div>
              <div class="col-md-2 bold">
                {{ $t("signUpPage").citizenship }}<b class="required">*</b>
              </div>
              <div class="col-md-4">
                <select
                  class="form-control test-control"
                  v-model="entity_id_type"
                >
                  <option value="tckn">{{ $t("signUpPage").turkey }}</option>
                  <option value="ykn">{{ $t("signUpPage").foreign }}</option>
                </select>
                <div
                  class="error"
                  v-if="!$v.entity_id_type.required && submitStatus == 'ERROR'"
                >
                  * citizenship is required.
                </div>
              </div>
            </div>
          </div>
          <div class="myprofile-form-div">
            <div class="row">
              <div class="col-md-3 bold">
                {{ $t("signUpPage").email }}<b class="required">*</b>
              </div>
              <div class="col-md-9">
                <input type="text" class="form-control" v-model="email" />
                <div
                  class="error"
                  v-if="!$v.email.required && submitStatus == 'ERROR'"
                >
                  * Email is required.
                </div>
                <div
                  class="error"
                  v-if="!$v.email.email && submitStatus == 'ERROR'"
                >
                  * Please enter valid e-mail address.
                </div>
              </div>
            </div>
          </div>
          <div class="myprofile-form-div">
            <div class="row">
              <div class="col-md-3 bold">
                {{ $t("signUpPage").password }}<b class="required">*</b>
              </div>
              <div class="col-md-9">
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                />
                <div
                  class="error"
                  v-if="!$v.password.required && submitStatus == 'ERROR'"
                >
                  * Password is required.
                </div>
                <div
                  class="error"
                  v-if="!$v.password.minLength && submitStatus == 'ERROR'"
                >
                  * Password must have at least
                  {{ $v.password.$params.minLength.min }} letters.
                </div>
              </div>
            </div>
          </div>
          <div class="myprofile-form-div">
            <div class="row">
              <div class="col-md-3 bold">
                {{ $t("signUpPage").confirmPassword }}<b class="required">*</b>
              </div>
              <div class="col-md-9">
                <input
                  type="password"
                  class="form-control"
                  v-model="confirmPassword"
                />
                <div
                  class="error"
                  v-if="!$v.confirmPassword.required && submitStatus == 'ERROR'"
                >
                  * Confirm Password field is required.
                </div>
                <div
                  class="error"
                  v-if="
                    !$v.confirmPassword.sameAsPassword &&
                    submitStatus == 'ERROR'
                  "
                >
                  * Passwords must be equal.
                </div>
              </div>
            </div>
          </div>
          <div class="myprofile-form-div">
            <div class="row">
              <div class="col-md-3 bold">
                {{ $t("signUpPage").hearFeedback }}<b class="required">*</b>
              </div>
              <div class="col-md-9">
                <select class="form-control test-control" v-model="feedback">
                  <option>
                    Lorem ipsum dolar sit amet. lorem ipsum dolar sit amet
                  </option>
                  <option>
                    Lorem ipsum dolar sit amet. lorem ipsum dolar sit amet
                  </option>
                  <option>
                    Lorem ipsum dolar sit amet. lorem ipsum dolar sit amet
                  </option>
                  <option>
                    Lorem ipsum dolar sit amet. lorem ipsum dolar sit amet
                  </option>
                  <option>
                    Lorem ipsum dolar sit amet. lorem ipsum dolar sit amet
                  </option>
                  <option>
                    Lorem ipsum dolar sit amet. lorem ipsum dolar sit amet
                  </option>
                  <option>
                    Lorem ipsum dolar sit amet. lorem ipsum dolar sit amet
                  </option>
                </select>
                <div
                  class="error"
                  v-if="!$v.feedback.required && submitStatus == 'ERROR'"
                >
                  * Feedback is required.
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-12 text-center">
        <button
          class="btn btn-kaydet"
          @click="register"
          :disabled="submitStatus == 'PENDING'"
        >
          {{ $t("signUp") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  sameAs,
  email,
  numeric,
} from "vuelidate/lib/validators";
// import { mapGetters } from "vuex";

export default {
  name: "SignUp",
  computed: {
    // ...mapGetters(["countries", "cities"]),
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      phoneNumber: null,
      userType: null,
      job: null,
      feedback: null,
      email: null,
      password: null,
      confirmPassword: null,
      city: null,
      country: null,
      submitStatus: null,
      entity_id_type: null,
    };
  },
  validations: {
    entity_id_type: {
      required,
    },
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    phoneNumber: {
      numeric,
    },
    userType: { required },
    country: { required },
    city: { required },
    feedback: { required },
    password: {
      required,
      minLength: minLength(8),
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs("password"),
    },
    email: {
      required,
      email,
    },
  },
  methods: {
    register() {
      this.$v.$touch();
      console.log(this.phoneNumber);
      console.log(typeof this.phoneNumber);
      if (this.$v.$invalid) {
        console.log("Fill the form correctly!");
        this.submitStatus = "ERROR";
      } else {
        this.$store.dispatch("register", this.makeUserObject());
        console.log("registered succesfully");
        console.log(this.makeUserObject());
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
    makeUserObject() {
      return {
        name: this.firstName,
        entity_id_type: this.entity_id_type,
        surname: this.lastName,
        entity_type: "n",
        title: this.job,
        mobile: this.phoneNumber,
        email: this.email,
        city: this.city,
        country: this.country,
        password: this.password,
        feedback: this.feedback,
        role: this.userType,
      };
    },
    onChangeCountry(event) {
      console.log(event.target.value);
      this.$store.dispatch("getCities", event.target.value);
    },
  },
  mounted() {
    this.$store.dispatch("getCountries");
  },
};
</script>

<style>
.bold {
  font-weight: bold;
}
.form-control {
  padding: 14px;
  font-size: 13px;
  border-width: 0px;
  border-color: #ffffff;
  background-color: #e0e0e0;
  color: #131313;
  border-style: solid;
  border-radius: 14px;
  box-shadow: 0px 0px 0px rgba(224, 5, 5, 0);
  text-shadow: 0px 0px 0px rgba(54, 54, 54, 0);
}

.myprofile-form-div {
  margin-bottom: 20px;
}
.test-control {
  padding: 3px;
}
.btndemo {
  background-color: #f16124;
  color: #f16124;
}

.btn-kaydet {
  border-radius: 14px;
  background-color: #f16124;

  color: white;
  font-size: 14px;
  font-weight: 600;
  min-height: 20px;
  min-width: 100px;
}
.demo {
  background-color: black;
  color: white;
}
.demo1 {
  background-color: black;
}

.btn-kaydet:hover {
  color: whitesmoke;
  background-color: #f16124;
}

.card {
  background-color: white;
  border-radius: 14px;
}

.error-input {
  border-color: red;
}

.required {
  color: #f16124;
}

.error {
  font-size: 10px;
  color: #f16124;
}
</style>
