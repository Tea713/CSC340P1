<template>
    <div class="container-fluid text-center">
        <div class="row">
            <!-- Left side-->
            <div class="col d-flex align-items-center justify-content-center bg-dark text-white" style="height: 100vh;">
                <!--Img form-->
                <form @submit.prevent="uploadImage" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="imageUpload"></label>
                        <input type="file" class="form-control-file" id="imageUpload" @change="previewImage" accept="image/*">
                    </div>
                    <button type="submit" class="btn btn-primary">Scan</button>
                </form>
                <!-- Dropdown for relic sets-->
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="relicSetDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img v-if="selectedSet" :src=selectedSet[1] class="relicIcon">
                        {{ selectedSet ? selectedSet[0] : 'Select set' }}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="relicSetDropdown">
                        <a class="dropdown-item" v-for="set in relicSets" :key="set" @click="selectSet(set)">
                            <img v-if="set[1]" :src=set[1] class="relicIcon"> {{ set[0] }}
                        </a>
                    </ul>
                </div>
                <!-- Dropdown for specific relic-->
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="relicDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :disabled="!selectedSet">
                        <img v-if="selectedRelic" :src=selectedRelic[1] class="relicIcon">
                        {{ selectedRelic ? selectedRelic[0] : 'Select relic' }}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="relicDropdown">
                        <a class="dropdown-item" v-for="(img, type) in selectedSetRelics" :key="type" @click="selectRelic([type, img])">
                            <img v-if="img" :src=img class="relicIcon"> {{ type }}
                        </a>
                    </ul>
                </div>
            </div>
            <!-- Right side-->
            <div class="col d-flex align-items-center justify-content-center bg-dark text-white" style="height: 100vh;">
                <div>
                    <!-- Display image preview -->
                    <img :src="selectedImagePreview" v-if="selectedImagePreview" style="max-width: 100%; max-height: 800px;" />
                </div>
                <!-- Drag and drop menu-->
                <div>
                    <form @submit.prevent="handleSubmit">
                        <input type="file" ref="fileInput" @change="handleFileChange" style="display: none" accept="image/*">
                        <div class="drop-area" @dragover.prevent="handleDragOver" @drop="handleDrop" @click="openFileInput">
                            <p>Drag & Drop an image or click to upload</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { collection, onSnapshot, QuerySnapshot, doc } from 'firebase/firestore'
import db from '../firebase/init.js' 

export default {
    name: 'Analyzer',
    data(){
        return{
            selectedImage: null,
            selectedImagePreview: null,
            selectedSet: null,
            selectedRelic: null,
            selectedSetRelics: null,
            relicSets: []
        }
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
                this.uploadedImageUrl = 'https://via.placeholder.com/300';
            }, 1000); // Simulate a delay
        },
        selectSet(set) {
            this.selectedSet = set;
            this.selectedRelic = null; // Clear the selected relic when a new set is selected
        },
        selectRelic(relic) {
            this.selectedRelic = relic;
            console.log(relic.value)
        },

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
    },

    created() {
        //console.log("retrieving relics")
        // Fetch artifact sets from Firestore
        onSnapshot(collection(db, 'relics'), (QuerySnapshot) => {
            QuerySnapshot.forEach((doc) => {
                //console.log(doc.data().name)
                this.relicSets.push([doc.data().name, doc.data().icon, doc.data().relicIcons])
            })
        }) 
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
}
</script>

<style>
    .container-fluid{
        max-width: 100%;
    }
    .col {
        height: 100%;
        width: 100%;
        padding: 0px;
        border: 1px solid #ccc;
    }
    .relicIcon {
        height: 40px;
        width: 40px;
    }
</style>