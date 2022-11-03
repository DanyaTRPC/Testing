<template>
    <div>
        <div class="myAccountInfo">
            <UserCircleIcon  class="icon11"/>
            <p id="cabinet">Мій кабінет</p>
            <UploadIcon class="icon10"/>
            <div class="timeoutPhoto">
                Загрузити <br>зображення
            </div>
            <p id="infoContacts">
                Прізвищe Ім’я По батькові <br>
                <br>Номер телефону: 0666666666 <br>
               <br> Пошта: Daybozhe@gmail.com <br>
            </p>
            <router-link to="/addGoods" class="pages" id="addAdvertisement">Додати товар</router-link><br>
            <ClipboardListIcon class="icon12"/>
            <p id="myAdvertisemen">
                Мої оголошення
            </p>
            <div id="Advertisemen">
            </div>
        </div>
        
    </div>
</template>

<script>
import { UploadIcon } from "@vue-hero-icons/outline"
import { UserCircleIcon } from "@vue-hero-icons/solid"
import { ClipboardListIcon } from "@vue-hero-icons/outline"
    export default {
     components: {  UploadIcon,UserCircleIcon,ClipboardListIcon
  }
    } 
    
</script>

