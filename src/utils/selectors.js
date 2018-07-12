export const getVisibleHeroes = (heroes, filter) =>
    heroes.filter(heroe => heroe.name.toLowerCase().includes(filter));

export const getHeroesBySquadEditorIds = (heroes, squadEditorIds) => heroes.filter(hero => squadEditorIds.includes(hero.id));

export const getAvailHeroes = (heroes, filter, squadEditorIds) => heroes.filter(hero => {
        const heroesNotAtEditor = !squadEditorIds.includes(hero.id);
        const hasFilter = hero.name.toLowerCase().includes(filter);

        return heroesNotAtEditor && hasFilter;
    });

export const getTotal= (heroes, pattern)=>
  // eslint-disable-next-line
    heroes.reduce((accum, hero)=>accum+=+hero[pattern],0);

// eslint need for
export const x = 5;
