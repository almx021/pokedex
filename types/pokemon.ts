type Sprite = string | null;

type BasicSpriteSet = {
  back_default?: Sprite;
  back_gray?: Sprite;
  back_transparent?: Sprite;
  front_default?: Sprite;
  front_gray?: Sprite;
  front_transparent?: Sprite;
  back_shiny?: Sprite;
  front_shiny?: Sprite;
  back_shiny_transparent?: Sprite;
  front_shiny_transparent?: Sprite;
  back_female?: Sprite;
  front_female?: Sprite;
  back_shiny_female?: Sprite;
  front_shiny_female?: Sprite;
};

type AnimatedSpriteSet = BasicSpriteSet & {
  animated?: {
    [key: string]: Sprite;
  };
};

type GenerationI = {
  "red-blue": BasicSpriteSet;
  yellow: BasicSpriteSet;
};

type GenerationII = {
  crystal: BasicSpriteSet;
  gold: BasicSpriteSet;
  silver: BasicSpriteSet;
};

type GenerationIII = {
  emerald: BasicSpriteSet;
  "firered-leafgreen": BasicSpriteSet;
  "ruby-sapphire": BasicSpriteSet;
};

type GenerationIV = {
  "diamond-pearl": BasicSpriteSet;
  "heartgold-soulsilver": BasicSpriteSet;
  platinum: BasicSpriteSet;
};

type GenerationV = {
  "black-white": AnimatedSpriteSet;
};

type GenerationVI = {
  "omegaruby-alphasapphire": BasicSpriteSet;
  "x-y": BasicSpriteSet;
};

type GenerationVII = {
  icons: BasicSpriteSet;
  "ultra-sun-ultra-moon": BasicSpriteSet;
};

type GenerationVIII = {
  icons: {
    front_default: string;
    front_female?: string;
  };
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  order: number;
  location_area_encounters: string;

  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];

  cries: {
    latest: string;
    legacy: string;
  };

  forms: {
    name: string;
    url: string;
  }[];

  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];

  held_items: {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];

  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }[];

  past_abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];

  species: {
    name: string;
    url: string;
  };

  sprites: {
        back_default: string;
        back_female?: string;
        back_shiny: string;
        back_shiny_female?: string;
        front_default: string;
        front_female?: string;
        front_shiny: string;
        front_shiny_female?: string;
    other: {
        dream_world: {
            front_default: string;
            front_female?: string;
        };
        home: {
            front_default: string;
            front_female?: string;
            front_shiny: string;
            front_shiny_female?: string;
        };
        official_artwork: {
            front_default: string;
            front_shiny: string;
        };
        showdown: {
            back_default: string;
            back_female?: string;
            back_shiny: string;
            back_shiny_female?: string;
            front_default: string;
            front_female?: string;
            front_shiny: string;
            front_shiny_female?: string;
        }
    };
    versions?: {
        "generation-i": GenerationI;
        "generation-ii": GenerationII;
        "generation-iii": GenerationIII;
        "generation-iv": GenerationIV;
        "generation-v": GenerationV;
        "generation-vi": GenerationVI;
        "generation-vii": GenerationVII;
        "generation-viii": GenerationVIII;
    };
  };

  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];

  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};
