import { defineStore } from 'pinia'

export const useFile = defineStore({
  id: 'file',
  state: () => ({
    //In the backoffice, it's the selected tab item
    currentFileOption: 'Create',

    //Recover list from the localstorage
    fileList: JSON.parse(localStorage.getItem('files')),

    //Set the selected file in the list
    currentSelectedFile: null
  }),

  getters: {
    getCurrentFileOption: (state) => state.currentFileOption,
    getCurrentSelectedFile(state) {
      return state.currentSelectedFile ? state.currentSelectedFile : this.getFileList[0]
    },

    getFileList: (state) => (state.fileList ? state.fileList : [])
  },

  actions: {
    /////////Mutations////////////
    SET_CURRENT_FILE_OPTION(fileOption) {
      this.currentFileOption = fileOption
    },
    SET_CURRENT_SELECTED_FILE(file) {
      this.currentSelectedFile = file
    },

    /////////////CRUD//////////////
    ADD_FILE(newFile) {
      let files = this.getFileList
      let file = { ...newFile, ...{ id: files.length + 1 } }

      if (files == null) files = []
      files.unshift(file)

      localStorage.setItem('files', JSON.stringify(files))
    },
    UPDATE_FILE(updatedFile) {
      let files = this.getFileList
      let fileIndex = files.findIndex((file) => file.id === updatedFile.id)

      files[fileIndex] = updatedFile

      localStorage.setItem('files', JSON.stringify(files))
    },
    DELETE_FILE(deletedFile) {
      let files = this.getFileList
      let fileIndex = files.findIndex((file) => file.id === deletedFile.id)

      files.splice(fileIndex, 1)

      localStorage.setItem('files', JSON.stringify(files))
    }
  }
})
