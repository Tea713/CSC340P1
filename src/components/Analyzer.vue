<template>
  <div class="container-fluid text-center">
    <div class="row">
      <!-- Left side-->
      <div
        class="col d-flex align-items-center justify-content-center bg-dark text-white outer-col"
        style="height: 100vh"
      >
        <div class="container text-center">
          <div class="row">
            <!-- Dropdown for relic sets-->
            <div class="col">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle fixed-dropdown-btn"
                  type="button"
                  id="relicSetDropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    v-if="selectedSet"
                    :src="selectedSet[1]"
                    class="relicIcon"
                  />
                  {{ selectedSet ? selectedSet[0] : "Select set" }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="relicSetDropdown">
                  <a
                    class="dropdown-item"
                    v-for="set in relicSets"
                    :key="set"
                    @click="selectSet(set)"
                  >
                    <img v-if="set[1]" :src="set[1]" class="relicIcon" />
                    {{ set[0] }}
                  </a>
                </ul>
              </div>
            </div>
            <!-- Dropdown for specific relic-->
            <div class="col">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle fixed-dropdown-btn"
                  type="button"
                  id="relicDropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  :disabled="!selectedSet"
                >
                  <img
                    v-if="selectedRelic"
                    :src="selectedRelic[1]"
                    class="relicIcon"
                  />
                  {{ selectedRelic ? selectedRelic[0] : "Select relic" }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="relicDropdown">
                  <a
                    class="dropdown-item"
                    v-for="(img, type) in selectedSetRelics"
                    :key="type"
                    @click="selectRelic([type, img])"
                  >
                    <img v-if="img" :src="img" class="relicIcon" /> {{ type }}
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <!-- main stats -->
          <div class="row justify-content-end">
            <div class="col-md-4"></div>
            <div class="col">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style="width: 120px"
                >
                  {{ selectedRarityText }}
                </button>
                <ul class="dropdown-menu">
                  <a class="dropdown-item" @click="selectRarity(5)">★★★★★</a>
                  <a class="dropdown-item" @click="selectRarity(4)">★★★★</a>
                  <a class="dropdown-item" @click="selectRarity(3)">★★★</a>
                </ul>
              </div>
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Level"
                aria-label="level"
              />
            </div>
            <div class="col-md-4"></div>
          </div>
          <!-- Dropdown and input for main stat -->
          <div class="row">
            <div
              class="d-flex align-items-center justify-content-center"
              style="height: auto"
            >
              <button
                type="button"
                class="btn btn-primary"
                style="width: 100px"
                disabled
              >
                Main stat:
              </button>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="statsDropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ selectedStat || "empty" }}
                </button>
                <div
                  class="dropdown-menu"
                  aria-labelledby="statsDropdown"
                  style="max-height: 200px; overflow-y: auto"
                >
                  <a
                    class="dropdown-item"
                    v-for="stat in stats"
                    :key="stat"
                    @click="selectStat(stat)"
                  >
                    {{ stat }}
                  </a>
                </div>
              </div>
              <!-- Text Input Form for main stat-->
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="textInput"
                  v-model="mainStatValue"
                  placeholder="Enter value..."
                />
              </div>
            </div>
          </div>

          <!-- Substat -->
          <div class="row" v-for="(substat, index) in substats" :key="index">
            <div
              class="d-flex align-items-center justify-content-center"
              style="height: auto"
            >
              <!-- Substat Label -->
              <button
                type="button"
                class="btn btn-primary"
                style="width: 100px"
                disabled
              >
                {{ `Substat ${index + 1}:` }}
              </button>

              <!-- Substat Dropdown -->

              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="substatDropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ selectedSubstats[index] || "empty" }}
                </button>
                <div
                  class="dropdown-menu"
                  aria-labelledby="statsDropdown"
                  style="max-height: 200px; overflow-y: auto"
                >
                  <a
                    class="dropdown-item"
                    v-for="stat in substatOptions"
                    :key="stat"
                    @click="selectSubstat(index, stat)"
                  >
                    {{ stat }}
                  </a>
                </div>
              </div>

              <!-- Substat Value Input -->

              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="substatValues[index]"
                  placeholder="Enter value..."
                />
              </div>
            </div>
          </div>

          <!--select and scan buttons-->
          <div class="row">
            <!--Img form-->
            <div class="col">
              <form @submit.prevent="uploadImage" enctype="multipart/form-data">
                <div class="form-group">
                  <input
                    type="file"
                    class="form-control-file"
                    id="imageUpload"
                    @change="previewImage"
                    accept="image/*"
                  />
                  <button type="button" class="btn btn-secondary">
                    <label for="imageUpload">Select file</label>
                  </button>
                </div>
              </form>
            </div>
            <div class="col">
              <button @click="scanAndCopy" class="btn btn-primary">
                Scan
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Right side-->
      <div
        class="col d-flex align-items-center justify-content-center bg-dark text-white outer-col"
        style="height: 100vh"
      >
        <div>
          <!-- Display image preview -->
          <img
            :src="selectedImagePreview"
            v-if="selectedImagePreview"
            style="max-width: 100%; max-height: 800px"
          />
        </div>
        <!-- Drag and drop menu-->
        <div>
          <form @submit.prevent="handleSubmit">
            <input
              type="file"
              ref="fileInput"
              @change="handleFileChange"
              style="display: none"
              accept="image/*"
            />
            <div
              class="drop-area"
              @dragover.prevent="handleDragOver"
              @drop="handleDrop"
              @click="openFileInput"
            >
              <p v-if="!selectedImagePreview">
                Drag & Drop an image or click to upload
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, onSnapshot, QuerySnapshot, doc } from "firebase/firestore";
import db from "../firebase/init.js";

export default {
  name: "Analyzer",
  data() {
    return {
      selectedImage: null,
      selectedImagePreview: null,
      selectedSet: null,
      selectedRelic: null,
      selectedSetRelics: null,
      selectedRarity: null,
      selectedStat: "", // Initially no stat/item selected
      mainStatValue: "", // Initially empty input value
      stats: [
        "HP",
        "ATK",
        "HP%",
        "ATK%",
        "DEF%",
        "Effect Hit Rate",
        "Outgoing Healing Boost",
        "CRIT Rate",
        "CRIT DMG",
        "SPD",
        "Physical DMG Boost",
        "Fire DMG Boost",
        "Ice DMG Boost",
        "Wind DMG Boost",
        "Lightning DMG Boost",
        "Quantum DMG Boost",
        "Imaginary DMG Boost",
        "Break Effect",
        "Energy Regeneration Rate",
      ],
      substats: [1, 2, 3, 4], // Number of substats
      substatOptions: [
        "SPD",
        "HP",
        "ATK",
        "DEF",
        "HP%",
        "ATK%",
        "DEF%",
        "Effect Hit Rate%",
        "Effect RES%",
        "CRIT Rate%",
        "CRIT DMG%",
      ],
      selectedSubstats: [], // Array to store selected substats
      substatValues: [], // Array to store substat values
      relicSets: [],
    };
  },
  methods: {
    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedImagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.selectedImagePreview = null;
      }
    },
    uploadImage() {
      // Simulate image upload process
      // In a real application, you would send the image to the server and get the URL in response.
      setTimeout(() => {
        // Replace this with the actual URL of the uploaded image
        this.uploadedImageUrl = "https://via.placeholder.com/300";
      }, 1000); // Simulate a delay
    },
    selectSet(set) {
      this.selectedSet = set;
      this.selectedRelic = null; // Clear the selected relic when a new set is selected
    },
    selectRelic(relic) {
      this.selectedRelic = relic;
      console.log(relic.key)
    },
    selectRarity(rarity) {
      this.selectedRarity = rarity;
    },
    selectStat(stat) {
      this.selectedStat = stat;
    },
    selectSubstat(index, option) {
      this.selectedSubstats[index] = option;
    },

    //drag and drop functions
    handleDragOver(event) {
      event.preventDefault();
    },
    handleDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        this.handleFile(files[0]);
      }
    },
    handleFileChange() {
      const files = this.$refs.fileInput.files;
      if (files.length > 0) {
        this.handleFile(files[0]);
      }
    },
    handleFile(file) {
      // Handle the selected file, e.g., preview the image
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        // Display or process the image as needed
      };
      reader.readAsDataURL(file);
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleSubmit() {
      // Handle form submission here
    },
    scanAndCopy() {
      console.log("Converting");

      const sub = [];
      for (let i = 0; i < this.selectedSubstats.length; i++) {
        const substat = this.selectedSubstats[i];
        const value = this.substatValues[i];

        // Create a substat pair object and add it to the array
        sub.push({ substat, value });
      }

      const selMStat = this.selectedStat;
      const mSV = this.mainStatValue;

      const jsonData = {
        set: this.selectedSet[0],
        relic: this.selectedRelic[0],
        rarity: this.selectedRarity,
        mainStat: {selectedStat: mSV},
        substats: sub,
      };
      // Convert the JSON object to a string for export
      const jsonString = JSON.stringify(jsonData, null, 2);

      // Copy the text inside the text field
      navigator.clipboard.writeText(jsonString);

      // Alert the copied text
      alert("Copied the text: " + jsonString);
    },
  },

  created() {
    //console.log("retrieving relics")
    // Fetch artifact sets from Firestore
    onSnapshot(collection(db, "HSR relics"), (QuerySnapshot) => {
      QuerySnapshot.forEach((doc) => {
        //console.log(doc.data().name)
        this.relicSets.push([doc.id, doc.data().icon, doc.data().relicIcons]);
      });
    });
    //console.log(this.relicSets[0])
  },

  watch: {
    selectedSet(newSet) {
      if (newSet) {
        this.selectedSetRelics = newSet[2];
      } else {
        // Clear the selectedSetArtifacts when no set is selected
        this.selectedSetRelics = [];
      }
    },
  },

  computed: {
    selectedRarityText() {
      switch (this.selectedRarity) {
        case 5:
          return "★★★★★";
        case 4:
          return "★★★★";
        case 3:
          return "★★★";
        default:
          return "Select Rarity";
      }
    },
  },
};
</script>

<style>
.container-fluid {
  max-width: 100%;
}
.outer-col {
  height: 100%;
  width: 100%;
  padding: 0px;
  border: 1px solid #ccc;
}
.row {
  margin-bottom: 20px;
}
.relicIcon {
  height: 35px;
  width: 35px;
}
.fixed-dropdown-btn {
  width: 260px;
  height: 45px;
}
.btn.dropdown-toggle {
  font-size: 14px;
}
#imageUpload {
  display: none;
}
.row row-cols-2 {
  border: none;
}
</style>