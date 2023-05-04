module.exports = ({ env }) => ({
  'drag-drop-content-types': {
    enabled: true,
    resolve: './src/plugins/drag-drop-content-types'
  },
  'import-export-entries': {
    enabled: true,
  },
	'publisher': {
		enabled: true,
    beforePublish: async ({ strapi, uid, entity }) => {
      console.log(entity)
    },
	},
  'upload': {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  'wysiwyg': {
    enabled: true,
    resolve: './src/plugins/wysiwyg'
  },
});