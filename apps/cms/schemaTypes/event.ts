import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: rule => rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),    
    defineField({
      name: 'start',
      title: 'Start Date/Time',
      type: 'datetime'
    }),
    defineField({
      name: 'end',
      title: 'End Date/Time',
      type: 'datetime',
    }),
    defineField({
      name: 'allDay',
      title: 'All Day Event?',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }), 
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string'
        }),
        defineField({
          name: 'street',
          title: 'Street',
          type: 'string'
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string'
        }),
        defineField({
          name: 'state',
          title: 'State',
          description: 'State abbreviation',
          type: 'string',
          validation: rule => rule.min(2).max(2)

        }),
        defineField({
          name: 'zip',
          title: 'Zip',
          type: 'string',
          validation: rule => rule.min(5).max(5)
        })

      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      date: 'start'
    },
    prepare(selection) {
      return {...selection, subtitle: new Date(selection.date).toLocaleDateString()}
    }
  }
})