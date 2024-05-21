<template>
  <div class="row">
    <div class="col col-2"></div>
    <div class="col col-8">
      <b class="question-title">Аудио-файл</b>
      <div class="question-container">
        <b class="question-container-title">Загрузите аудио</b>
        <div class="audio-container">
          <template v-if="file">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 8.375C7.5 6.94946 8.06629 5.58231 9.0743 4.5743C10.0823 3.56629 11.4495 3 12.875 3H26.773C27.4791 2.99992 28.1783 3.13896 28.8306 3.40918C29.483 3.6794 30.0757 4.07551 30.5749 4.57487L34.59 8.59C35.0899 9.08928 35.4865 9.68222 35.757 10.3349C36.0275 10.9876 36.1668 11.6872 36.1667 12.3937V33.4583C36.1667 34.8839 35.6004 36.251 34.5924 37.259C33.5844 38.267 32.2172 38.8333 30.7917 38.8333H12.875C11.4495 38.8333 10.0823 38.267 9.0743 37.259C8.06629 36.251 7.5 34.8839 7.5 33.4583V8.375ZM30.7917 37.0417H12.875C11.9246 37.0417 11.0132 36.6641 10.3412 35.9921C9.6692 35.3201 9.29167 34.4087 9.29167 33.4583V8.375C9.29167 7.42464 9.6692 6.51321 10.3412 5.8412C11.0132 5.1692 11.9246 4.79167 12.875 4.79167H26.773C26.9185 4.79178 27.0639 4.80075 27.2083 4.81854V8.375C27.2083 9.32536 27.5859 10.2368 28.2579 10.9088C28.9299 11.5808 29.8413 11.9583 30.7917 11.9583H34.3481C34.366 12.1017 34.375 12.2468 34.375 12.3937V33.4583C34.375 34.4087 33.9975 35.3201 33.3255 35.9921C32.6535 36.6641 31.742 37.0417 30.7917 37.0417ZM33.5992 10.1667C33.5138 10.0588 33.4223 9.95586 33.3251 9.8585L29.3082 5.84158C29.2108 5.74436 29.1079 5.65284 29 5.56746V8.375C29 8.85018 29.1888 9.3059 29.5248 9.6419C29.8608 9.9779 30.3165 10.1667 30.7917 10.1667H33.5992ZM26.3125 15.8373C26.3125 15.771 26.2977 15.7056 26.2694 15.6458C26.241 15.5859 26.1997 15.5331 26.1485 15.4911C26.0972 15.4491 26.0373 15.419 25.9731 15.403C25.9088 15.3869 25.8418 15.3854 25.7768 15.3983L19.506 16.6525C19.4045 16.6728 19.3131 16.7276 19.2475 16.8076C19.1818 16.8877 19.1459 16.9879 19.1458 17.0915V25.8438C19.1455 26.4142 18.9637 26.9697 18.6268 27.43C18.2898 27.8902 17.8151 28.2313 17.2714 28.4039C16.7277 28.5765 16.1432 28.5716 15.6024 28.3899C15.0617 28.2082 14.5928 27.8592 14.2636 27.3934C13.9344 26.9276 13.7619 26.369 13.7712 25.7987C13.7805 25.2283 13.971 24.6757 14.3151 24.2208C14.6593 23.7659 15.1393 23.4323 15.6857 23.2683C16.232 23.1043 16.8164 23.1184 17.3542 23.3085V17.0915C17.3542 16.0236 18.1067 15.1045 19.1548 14.8949L25.4256 13.6407C25.7506 13.5758 26.0859 13.5837 26.4074 13.664C26.7288 13.7443 27.0285 13.895 27.2847 14.1051C27.541 14.3152 27.7474 14.5796 27.8891 14.8791C28.0308 15.1787 28.1042 15.5059 28.1042 15.8373V24.0521C28.1039 24.6225 27.9221 25.1781 27.5851 25.6383C27.2481 26.0986 26.7734 26.4397 26.2297 26.6122C25.686 26.7848 25.1015 26.7799 24.5608 26.5982C24.02 26.4166 23.5511 26.0676 23.2219 25.6017C22.8927 25.1359 22.7203 24.5774 22.7295 24.007C22.7388 23.4367 22.9293 22.884 23.2735 22.4291C23.6176 21.9742 24.0976 21.6407 24.644 21.4766C25.1903 21.3126 25.7747 21.3267 26.3125 21.5169V15.8373ZM25.4167 23.1562C25.6543 23.1562 25.8821 23.2506 26.0501 23.4186C26.2181 23.5866 26.3125 23.8145 26.3125 24.0521C26.3125 24.2897 26.2181 24.5175 26.0501 24.6855C25.8821 24.8535 25.6543 24.9479 25.4167 24.9479C25.1791 24.9479 24.9512 24.8535 24.7832 24.6855C24.6152 24.5175 24.5208 24.2897 24.5208 24.0521C24.5208 23.8145 24.6152 23.5866 24.7832 23.4186C24.9512 23.2506 25.1791 23.1562 25.4167 23.1562ZM17.3542 25.8438C17.3542 25.6062 17.2598 25.3783 17.0918 25.2103C16.9238 25.0423 16.6959 24.9479 16.4583 24.9479C16.2207 24.9479 15.9929 25.0423 15.8249 25.2103C15.6569 25.3783 15.5625 25.6062 15.5625 25.8438C15.5625 26.0813 15.6569 26.3092 15.8249 26.4772C15.9929 26.6452 16.2207 26.7396 16.4583 26.7396C16.6959 26.7396 16.9238 26.6452 17.0918 26.4772C17.2598 26.3092 17.3542 26.0813 17.3542 25.8438Z" fill="#1DAEFF"/>
            </svg>
            <b>{{ file.name }}</b>
            <button class="delete-audio" @click="handleDelete">Удалить</button>
          </template>
          <template v-else>
            <input type="file" @change="upload" accept="audio/*" />
            <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.8999 0.278227C19.7348 0.104344 19.5086 0 19.274 0H5.23048C2.63898 0 0.5 2.13047 0.5 4.72162V31.2781C0.5 33.8695 2.63905 36 5.23041 36H24.2911C26.8826 36 29.0216 33.8695 29.0216 31.2781V10.1911C29.0216 9.96511 28.9172 9.74784 28.7695 9.58247L19.8999 0.278227ZM20.1521 3.06963L26.0913 9.30431H22.2304C21.0826 9.30431 20.1521 8.38251 20.1521 7.2348V3.06963ZM24.2911 34.2609H5.23041C3.60444 34.2609 2.23911 32.9131 2.23911 31.2781V4.72162C2.23911 3.09565 3.59565 1.73911 5.23041 1.73911H18.413V7.23473C18.413 9.3477 20.1175 11.0434 22.2304 11.0434H27.2825V31.2781C27.2825 32.9131 25.9259 34.2609 24.2911 34.2609Z" fill="#1DAEFF"/>
              <path d="M21.917 28.2606H7.60393C7.12581 28.2606 6.73438 28.6517 6.73438 29.1302C6.73438 29.6083 7.12573 29.9997 7.60393 29.9997H21.9257C22.4039 29.9997 22.7953 29.6084 22.7953 29.1302C22.7953 28.6517 22.4039 28.2606 21.917 28.2606ZM10.3082 18.9041L13.8909 15.0517V24.5475C13.8909 25.0256 14.2823 25.417 14.7604 25.417C15.2389 25.417 15.63 25.0257 15.63 24.5475V15.0518L19.2127 18.9041C19.3865 19.0864 19.6128 19.1823 19.8474 19.1823C20.0561 19.1823 20.2736 19.104 20.4387 18.9474C20.7868 18.617 20.8128 18.0691 20.4824 17.7214L15.3867 12.2518C15.2213 12.078 14.9953 11.9736 14.7519 11.9736C14.5083 11.9736 14.2822 12.078 14.1172 12.2519L9.02143 17.7214C8.69103 18.0691 8.71712 18.6256 9.06481 18.9474C9.43016 19.2779 9.97782 19.2518 10.3082 18.9041Z" fill="#1DAEFF"/>
            </svg>
            <p>Перетащите файл или<span>нажмите, чтобы загрузить</span>
            </p>
            <ul class="audio-detail">
              <li>MP3</li>
              <li>AAC</li>
              <li>WAV</li>
              <li>до 10 МБ</li>
            </ul>
          </template>
        </div>
      </div>
      <div class="question-tools">
        <v-button type="btn-primary">Сохранить</v-button>
        <v-button type="btn-outline-basic">Отмена</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton"

export default {
  name: "VAdminShortText",

  components: {
    VButton,
  },

  mounted() {

  },

  data() {
    return {
      file: '',
    }
  },

  methods: {
    upload (e) {
      this.file = e.target.files[0]
      if (!this.file.length) {
        return
      }
      this.createSong(this.file[0])
    },
    handleDelete() {
      this.file = ''
    },
    createSong (file) {
      let reader = new FileReader()
      let vm = this
      reader.onload = (e) => {
        vm.song = e.target.result
      }
      reader.readAsDataURL(file)
      console.log(file)
      console.log(vm)
    }
  }
}
</script>

<style scoped>
.question-container {
  border-radius: 20px;
  background: #FFF;
  padding: 30px;
}

.question-container-title {
  color: #000;
  font-size: 25px;
  font-weight: 600;
  line-height: normal;
  display: block;
  margin-bottom: 15px;
}

.audio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 2px dashed var(--iqra-grey-3, #DADADA);
  padding: 70px 100px 20px;
  position: relative;
  overflow: hidden;
}

.audio-container p {
  margin-top: 10px;
  color: var(--iqra-grey-450, #808080);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.audio-container span {
  color: var(--iqra-blue-2, #1DAEFF);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.audio-container input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.audio-detail {
  display: flex;
  margin-top: 25px;
}

.audio-detail li {
  border-radius: 6px;
  background: rgba(29, 174, 255, 0.15);
  padding: 5px 10px;
  color: #1DAEFF;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.audio-detail li + li {
  margin-left: 6px;
}

.audio-detail li:last-child {
  border: 1px solid rgba(29, 174, 255, 0.25);
  background: #FFF;
}

.question-tools {
  justify-content: space-between;
}

.audio-container b {
  color: var(--iqra-black, #000);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: block;
  margin-top: 10px;
}

.delete-audio {
  color: var(--iqra-red, #F94848);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 30px;
  border: none;
  border-bottom: 1px solid #F94848;
  background: transparent;
}

</style>
