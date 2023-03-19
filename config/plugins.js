module.exports = ({ env }) => ({
  upload: {
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
  'drag-drop-content-types': {
    enabled: true
  },
  'import-export-entries': {
    enabled: true,
  },
  'wysiwyg': {
    enabled: true,
    resolve: './src/plugins/wysiwyg'
  },
});