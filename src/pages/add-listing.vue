<script >
  export default {
  data() {
    return {
      currentStep: 1,
      totalSteps: 7,
      formData: {
        listingTitle: "",
        listingType: "",
        listingPrice: "",
        category: "",
        keyword: "",
        address: "",
        planTitle: "",
        icon: null,
        description: "",
        // Add more fields as needed
      },
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    
    submitForm() {
      // Handle form submission logic here
      console.log("Form Data Submitted:", this.formData);
    },
  },
};
</script>


<template>
    <div class="dif-inner-page-banner-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
        <div class="dif-inner-page-banner-content">
        <h1>Add Listing</h1>
        <!-- <nav style="--bs-breadcrumb-divider: url(" data:image="" svg+xml,%3csvg="" xmlns="http://www.w3.org/2000/svg" width="8" height="8" %3e%3cpath="" d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="currentColor" %3e%3c="" svg%3e");"="" aria-label="breadcrumb"> -->
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Add Listing</li>
        </ol>
        <!-- </nav> -->
        </div>
        </div>
        </div>
        </div>
        </div>

    
        <div class="add-listing-section pt-120 mb-120">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <form @submit.prevent="submitForm">
                    
        
                    <!-- Step 1: Listing Info -->
                    <div v-if="currentStep === 1">
                      <h5>Listing Info</h5>
                      <div class="row">
                        <div class="col-lg-4 mb-35">
                          <label>Listing Title</label>
                          <input v-model="formData.listingTitle" placeholder="Write Title" />
                        </div>
                        <div class="col-lg-4 mb-35">
                          <label>Listing Type</label>
                          <select v-model="formData.listingType">
                            <option value="All Type">All Type</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Restaurants">Restaurants</option>
                            <option value="Event">Event</option>
                            <option value="Fashion">Fashion</option>
                          </select>
                        </div>
                        <div class="col-lg-4 mb-35">
                          <label>Listing Price</label>
                          <input type="number" v-model="formData.listingPrice" placeholder="Write Price" />
                        </div>
                        <div class="col-lg-4">
                          <label>Category</label>
                          <select v-model="formData.category">
                            <option value="All Category">All Category</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Restaurants">Restaurants</option>
                            <option value="Event">Event</option>
                            <option value="Fashion">Fashion</option>
                          </select>
                        </div>
                        <div class="col-lg-8 mb-35">
                          <label>Keyword</label>
                          <input v-model="formData.keyword" placeholder="List Your Keyword" />
                        </div>
                        <div class="col-lg-12 mb-35">
                          <label>Address</label>
                          <input v-model="formData.address" placeholder="Write Your Address" />
                        </div>
                        <div class="col-lg-6 mb-35">
                          <label>Plan Title</label>
                          <input v-model="formData.planTitle" placeholder="All Category" />
                        </div>
                        
                        <div class="col-lg-12">
                          <label>Description</label>
                          <textarea v-model="formData.description" cols="30" rows="10" placeholder="Write Description"></textarea>
                        </div>
                      </div>
                    </div>
        
                    <!-- Additional steps go here, similar to Step 1 -->
                    <!-- Step 2: Gallery & Video, Step 3: Location, etc. -->
        
                    <!-- Navigation Buttons -->
                    <div style="overflow:auto; padding-top: 60px;">
                      <div style="display: flex; justify-content: center; gap: 20px;">
                        <button type="button" @click="prevStep" v-if="currentStep > 1">Previous</button>
                        <button type="button" @click="nextStep" v-if="currentStep < totalSteps">Next</button>
                        <button type="submit" v-if="currentStep === totalSteps">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
</template>

<style scoped>
.step {
  padding: 10px;
  border: 1px solid #ccc;
  margin: 0 5px;
  border-radius: 5px;
}

.step.active {
  background-color: #000;
  color: white;
}

input, select, textarea {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  background-color: #000;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: orangered;
}
</style>