const inputLabels = [
    {
      label : "Recipient's Relation",
      options : [
        {
          label : 'Spouse',
          value : 'spouse'
        },
        {
          label : 'Parent',
          value : 'parent'
        },
        {
          label : 'Child',
          value : 'child'
        },
        {
          label : 'Sibling',
          value : 'sibling'
        },
        {
          label : 'Friend',
          value : 'friend'
        },
        {
          label : 'Co-worker',
          value : 'co-worker'
        }
        
      ]
    },
    {
      label : "Recipient's Gender",
      options : [
        {
          label : 'Male',
          value :'male'
        },
        {
          label : 'Female',
          value : 'female'
        }
      ]
    },
    {
      label : "Recipient's Age",
      
      options : [
        {
          label : 'Under 18',
          value : 'under18'
        },
        {
          label : '18-24',
          value : '18-24'
        },
        {
          label : '25-34',
          value : '25-34'
        },
        {
          label : '35-44',
          value : '35-44'
        },
        {
          label : '45-54',
          value : '45-54'
        },
        {
          label : '50+',
          value : '50+'
        }
      ]
    },
    {
      label : "Budget",
      options : [
        {
          label : 'Less than $50',
          value : 'lessThan50'
        },
        {
          label : '$50-100',
          value : '50-100'
        },
        {
          label : '$100-200',
          value : '100-200'
        },
        {
          label : '$200+',
          value : '200+'
        }
      ]
    },
  ]

  export default inputLabels;
