
const attrModifier = document.querySelectorAll(".attribute-modifier")
const usedPoints = document.getElementById('used_points')

const Points = {used:0, max:27}

const values = [
    4,
    6,
    8,
    10,
    16,
    20,
    26,
    30
]

const ranks = {
    4: {title: "Typical", value:4, Cost:0},
    6: {title: "Typical", value:6, Cost:1},
    8: {title: "Good", value:8, Cost:1},
    10: {title: "Good", value:10, Cost:1},
    16: {title: "Excellent", value:16, Cost:1},
    20: {title: "Excellent", value:20, Cost:1},
    26: {title: "Remarkable", value:26, Cost:2},
    30: {title: "Remarkable", value:30, Cost:2}
}


const strAttribute = document.getElementById("Attribute_Str")
const strUp = strAttribute.nextElementSibling.children[0]
const strDown = strAttribute.nextElementSibling.children[1]
const strTotal = document.getElementById("total_str")
const strRank = document.getElementById("rank_str")
const strCost= document.getElementById("point_cost_str")

const dexAttribute = document.getElementById("Attribute_Dex")
const dexUp = dexAttribute.nextElementSibling.children[0]
const dexDown = dexAttribute.nextElementSibling.children[1]
const dexTotal = document.getElementById("total_dex")
const dexRank = document.getElementById("rank_dex")
const dexCost= document.getElementById("point_cost_dex")

const conAttribute = document.getElementById("Attribute_Con")
const conUp = conAttribute.nextElementSibling.children[0]
const conDown = conAttribute.nextElementSibling.children[1]
const conTotal = document.getElementById("total_con")
const conRank = document.getElementById("rank_con")
const conCost= document.getElementById("point_cost_con")

const intAttribute = document.getElementById("Attribute_Int")
const intUp = intAttribute.nextElementSibling.children[0]
const intDown = intAttribute.nextElementSibling.children[1]
const intTotal = document.getElementById("total_int")
const intRank = document.getElementById("rank_int")
const intCost= document.getElementById("point_cost_int")

const wisAttribute = document.getElementById("Attribute_Wis")
const wisUp = wisAttribute.nextElementSibling.children[0]
const wisDown = wisAttribute.nextElementSibling.children[1]
const wisTotal = document.getElementById("total_wis")
const wisRank = document.getElementById("rank_wis")
const wisCost= document.getElementById("point_cost_wis")

const chaAttribute = document.getElementById("Attribute_Cha")
const chaUp = chaAttribute.nextElementSibling.children[0]
const chaDown = chaAttribute.nextElementSibling.children[1]
const chaTotal = document.getElementById("total_cha")
const chaRank = document.getElementById("rank_cha")
const chaCost= document.getElementById("point_cost_cha")

const hitPoints = document.getElementById("hit_points")
const magicPoints = document.getElementById("magic_points")

function updateSecondStats(){
    hitPoints.textContent = (
        (parseInt(strAttribute.value)
        +parseInt(dexAttribute.value))*.5
        +parseInt(conAttribute.value)*3
    )
    magicPoints.textContent = (
        parseInt(intAttribute.value)
        +parseInt(wisAttribute.value)
        +parseInt(chaAttribute.value)
    )
}

function increment(attribute, total, rank, cost){
    let currentValue = parseInt(attribute.value)
    let index = values.indexOf(currentValue)
    if(index == values.length -1){
        return
    }
    else{
        const changeCost = ranks[values[index+1]].Cost
        if(Points.used + changeCost > Points.max)
            return
        attribute.value = values[index+1]
        total.textContent = values[index+1]
        rank.textContent = ranks[values[index+1]].title
        cost.textContent = parseInt(cost.textContent)+changeCost
        Points.used += changeCost
        usedPoints.textContent = Points.used
    }
    updateSecondStats()
}

function decrement(attribute, total, rank, cost){
    let currentValue = parseInt(attribute.value)
    let index = values.indexOf(currentValue)
    if(index < 1){
        return
    }
    else{
        const changeCost = ranks[values[index]].Cost
        attribute.value = values[index-1]
        total.textContent = values[index-1]
        rank.textContent = ranks[values[index-1]].title
        cost.textContent = parseInt(cost.textContent)-changeCost
        Points.used -= changeCost
        usedPoints.textContent = Points.used
    }
    updateSecondStats()
}


strUp.addEventListener('pointerdown', (e)=>{return increment(
    strAttribute,
    strTotal,
    strRank,
    strCost
)})

strDown.addEventListener('pointerdown', (e)=>{return decrement(
    strAttribute,
    strTotal,
    strRank,
    strCost
)})

dexUp.addEventListener('pointerdown', (e)=>{return increment(
    dexAttribute,
    dexTotal,
    dexRank,
    dexCost
)})

dexDown.addEventListener('pointerdown', (e)=>{return decrement(
    dexAttribute,
    dexTotal,
    dexRank,
    dexCost
)})

conUp.addEventListener('pointerdown', (e)=>{return increment(
    conAttribute,
    conTotal,
    conRank,
    conCost
)})

conDown.addEventListener('pointerdown', (e)=>{return decrement(
    conAttribute,
    conTotal,
    conRank,
    conCost
)})

intUp.addEventListener('pointerdown', (e)=>{return increment(
    intAttribute,
    intTotal,
    intRank,
    intCost
)})

intDown.addEventListener('pointerdown', (e)=>{return decrement(
    intAttribute,
    intTotal,
    intRank,
    intCost
)})

wisUp.addEventListener('pointerdown', (e)=>{return increment(
    wisAttribute,
    wisTotal,
    wisRank,
    wisCost
)})

wisDown.addEventListener('pointerdown', (e)=>{return decrement(
    wisAttribute,
    wisTotal,
    wisRank,
    wisCost
)})

chaUp.addEventListener('pointerdown', (e)=>{return increment(
    chaAttribute,
    chaTotal,
    chaRank,
    chaCost
)})

chaDown.addEventListener('pointerdown', (e)=>{return decrement(
    chaAttribute,
    chaTotal,
    chaRank,
    chaCost
)})

document.getElementById("reset").addEventListener("pointerdown", (e)=>{
    strAttribute.value = ranks[4].value
    strTotal.textContent = ranks[4].value
    strRank.textContent = ranks[4].title
    strCost.textContent = ranks[4].Cost
    
    dexAttribute.value = ranks[4].value
    dexTotal.textContent = ranks[4].value
    dexRank.textContent = ranks[4].title
    dexCost.textContent = ranks[4].Cost

    conAttribute.value = ranks[4].value
    conTotal.textContent = ranks[4].value
    conRank.textContent = ranks[4].title
    conCost.textContent = ranks[4].Cost

    intAttribute.value = ranks[4].value
    intTotal.textContent = ranks[4].value
    intRank.textContent = ranks[4].title
    intCost.textContent = ranks[4].Cost

    wisAttribute.value = ranks[4].value
    wisTotal.textContent = ranks[4].value
    wisRank.textContent = ranks[4].title
    wisCost.textContent = ranks[4].Cost

    chaAttribute.value = ranks[4].value
    chaTotal.textContent = ranks[4].value
    chaRank.textContent = ranks[4].title
    chaCost.textContent = ranks[4].Cost

    Points.used = 0

    usedPoints.textContent = Points.used
})

const secStatCon = document.querySelector("#secondary_stats div")

secStatCon.children[0].addEventListener("pointerover", (e)=>{
    let tooltips = document.querySelectorAll('.tooltip')
    if(tooltips.length == 1)
        tooltips[0].remove()
    const div = document.createElement('div')
    div.className = "tooltip"
    div.innerHTML = `<p>Tooltip</p>`
    +`<p>Hit Points are calculated as follows:<br>`
    +`<span class="tooltip-font">(Strength + Dexterity) x 1/2 + Constitution x 3</span></p>`
    document.querySelector(".app").appendChild(div)
    div.addEventListener("pointerleave", (e)=>{
        e.target.remove()
    })
})

secStatCon.children[1].addEventListener("pointerover", (e)=>{
    let tooltips = document.querySelectorAll('.tooltip')
    if(tooltips.length == 1)
        tooltips[0].remove()
    const div = document.createElement('div')
    div.className = "tooltip"
    div.innerHTML = `<p>Tooltip</p>`
    +`<p>Magic Points are calculated as follows:<br>`
    +`<span class="tooltip-font">Intelligence + Wisdom + Charisma</span></p>`
    document.querySelector(".app").appendChild(div)
    div.addEventListener("pointerleave", (e)=>{
        e.target.remove()
    })
})