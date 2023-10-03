import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  data: {
    id: Number,
    common_name: String,
    slug: String,
    scientific_name: String,
    main_species_id: Number,
    image_url: String,
    year: Number,
    bibliography: String,
    author: String,
    family_common_name: String,
    genus_id: Number,
    observations: String,
    vegetable: Boolean,
},
links: {
    self: String,
    species: String,
    genus: String,
},
main_species: {
  id: Number,
  common_name: String,
  slug: String,
  scientific_name: String,
  year: Number,
  bibliography: String,
  author: String,
  status: String,
  rank: String,
  family_common_name: String,
  genus_id: Number,
  observations: String,
  vegetable: Boolean,
  image_url: String,
  genus: String,
  family: String,
  duration: String,
  edible_part: String,
  edible: Boolean,
},
images: {
  leaf: [
    {
      id: Number,
      image_url: String,
      copyright: String,
    }
  ],
  bark: [
    {
      id: Number,
      image_url: String,
      copyright: String,
    }
  ],
  habit: [
    {
      id: Number,
      image_url: String,
      copyright: String,
    }
  ],
  flower: [
    {
      id: Number,
      image_url: String,
      copyright: String,
    }
  ],
  "": [
    {
      id: Number,
      image_url: String,
      copyright: String,
    }
  ],
},
common_names: {
  eng: [String],
  por: [String],
  spa: [String],
  fra: [String],
  en: [String],
  ar: [String],
  ca: [String],
  fr: [String],
  hu: [String],
  pt: [String],
  es: [String],
},
distribution: {
  native: [String],
  introduced: [String],
},
distributions: [
  {
    id: Number,
    name: String,
    slug: String,
    tdwg_code: String,
    tdwg_level: Number,
    species_count: Number,
    links: {
      self: String,
      plants: String,
      species: String,
    },
  },
],
introduced: [
  {
    id: Number,
    name: String,
    slug: String,
    tdwg_code: String,
    tdwg_level: Number,
    species_count: Number,
    links: {
      self: String,
      plants: String,
      species: String,
    },
  },
],
flower: {
  color: String,
  conspicuous: Boolean,
},
foliage: {
  texture: String,
  color: String,
  leaf_retention: Boolean,
},
fruit_or_seed: {
  conspicuous: Boolean,
  color: String,
  shape: String,
  seed_persistence: Boolean,
},
sources: [
  {
    last_update: Date,
    id: String,
    name: String,
    url: String,
    citation: String,
  },
],
specifications: {
  ligneous_type: String,
  growth_form: String,
  growth_habit: String,
  growth_rate: String,
  average_height: {
    cm: Number,
  },
  maximum_height: {
    cm: Number,
  },
  nitrogen_fixation: Boolean,
  shape_and_orientation: String,
  toxicity: String,
},
synonyms: [
  {
    id: Number,
    name: String,
    author: String,
    sources: [
      {
        last_update: Date,
        id: String,
        name: String,
        url: String,
        citation: String,
      },
    ],
  },
],
growth: {
  description: String,
  sowing: String,
  days_to_harvest: Number,
  row_spacing: {
    cm: Number,
  },
  spread: {
    cm: Number,
  },
  ph_maximum: Number,
  ph_minimum: Number,
  light: String,
  atmospheric_humidity: String,
  growth_months: [String],
  bloom_months: [String],
  fruit_months: [String],
  minimum_precipitation: {
    mm: Number,
  },
  maximum_precipitation: {
    mm: Number,
  },
  minimum_root_depth: {
    cm: Number,
  },
  minimum_temperature: {
    deg_f: Number,
    deg_c: Number,
  },
  maximum_temperature: {
    deg_f: Number,
    deg_c: Number,
  },
  soil_nutriments: String,
  soil_salinity: String,
  soil_texture: String,
  soil_humidity: String,
},
links: {
  self: String,
  plant: String,
  genus: String,
},
genus: {
  id: Number,
  name: String,
  slug: String,
  links: {
    self: String,
    plants: String,
    species: String,
    family: String,
  },
},
family: {
  id: Number,
  name: String,
  slug: String,
  links: {
    self: String,
    division_order: String,
    genus: String,
  },
},
species: {
  id: Number,
  common_name: String,
  slug: String,
  scientific_name: String,
  year: Number,
  bibliography: String,
  author: String,
  status: String,
  rank: String,
  family_common_name: String,
  genus_id: Number,
  image_url: String,
  genus: String,
  family: String,
  links: {
    self: String,
    plants: String,
    genus: String,
  }
},
subspecies: [],
  varieties: [],
  hybrids: [],
  forms: [],
  subvarieties: [],
  sources: [
    {
      last_update: String,
      id: String,
      name: String,
      url: String,
      citation: String,
    },
  ],
},

);

const GardenPlant = mongoose.model('GardenPlant', plantSchema);

module.exports = GardenPlant;
