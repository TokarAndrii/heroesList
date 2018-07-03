export const getVisibleHeroes = (heroes, filter) =>
    heroes.filter(heroe => heroe.name.toLowerCase().includes(filter));

export const getHeroesBySquadEditorIds = (heroes, squadEditorIds) => {
    return heroes.filter(hero => {
        return squadEditorIds.includes(hero.id);
    })
};

export const getAvailHeroes = (heroes, filter, squadEditorIds) => {
    return heroes.filter(hero => {
        const heroesNotAtEditor = !squadEditorIds.includes(hero.id);
        const hasFilter = hero.name.toLowerCase().includes(filter);

        return heroesNotAtEditor && hasFilter;
    });

};


//export const x = 5;