
const attrModifier = document.querySelectorAll(".attribute-modifier")
const usedPoints = document.getElementById('used_points')

const Points = {used:0, max:27}

const values = [
    5,
    6,
    8,
    10,
    16,
    20,
    26,
    30
]

const ranks = {
    5: {title: "Typical", value:5, Cost:0},
    6: {title: "Typical", value:6, Cost:1},
    8: {title: "Good", value:8, Cost:1},
    10: {title: "Good", value:10, Cost:1},
    16: {title: "Excellent", value:16, Cost:1},
    20: {title: "Excellent", value:20, Cost:1},
    26: {title: "Remarkable", value:26, Cost:2},
    30: {title: "Remarkable", value:30, Cost:2}
}

function scoreToPoint(score){
    switch(score){
        case 1:
        case 2:
        case 3:
            return {title:'Shift-0', value:0}
        case 4:
            return {title: 'Feeble', value: 1}
        case 5:
            return {title: 'Feeble', value: 2}
        case 6:
            return {title: 'Poor', value: 3}
        case 7:
            return {title: 'Poor', value: 4}
        case 8:
            return {title: 'Typical', value: 5}
        case 9:
            return {title: 'Typical', value: 6}
        case 10:
            return {title: 'Good', value: 8}
        case 11:
            return {title: 'Good', value: 10}
        case 12:
            return {title: 'Excellent', value: 16}
        case 13:
            return {title: 'Excellent', value: 20}
        case 14:
            return {title: 'Remarkable', value: 26}
        case 15:
            return {title: 'Remarkable', value: 30}
        case 16:
            return {title: 'Incredible', value: 36}
        case 17:
            return {title: 'Incredible', value: 40}
        case 18:
            return {title: 'Amazing', value: 46}
        case 19:
            return {title: 'Amazing', value: 50}
        case 20:
            return {title: 'Monstrous', value: 63}
        case 21:
            return {title: 'Monstrous', value: 75}
        case 22:
            return {title: 'Unearthly', value: 88}
        case 23:
            return {title: 'Unearthly', value: 100}
        case 24:
            return {title: 'Shift-X', value: 150}
        case 25:
            return {title: 'Shift-Y', value: 250}
        case 26:
            return {title: 'Shift-Z', value: 351}
        case 27:
            return {title: 'Shift-Z', value: 500}
        case 28:
            return {title: 'Class 1000', value: 1000}
        case 29:
            return {title: 'Class 3000', value: 3000}
        case 30:
        default:
            return {title: 'Class 5000', value: 5000}
    }
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

const attrInput = document.getElementById("attribute_entry")
const attrOutput = document.getElementById("attribute_out")

function updateSecondStats(){
    hitPoints.textContent = (
        (parseInt(strAttribute.value)
        +Math.floor(parseInt(dexAttribute.value)*.5))
        +parseInt(conAttribute.value)*2
    )
    magicPoints.textContent = (
        Math.floor(parseInt(intAttribute.value)/2)
        +Math.floor((parseInt(wisAttribute.value)
        +parseInt(chaAttribute.value))/4)
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
    strAttribute.value = ranks[5].value
    strTotal.textContent = ranks[5].value
    strRank.textContent = ranks[5].title
    strCost.textContent = ranks[5].Cost
    
    dexAttribute.value = ranks[5].value
    dexTotal.textContent = ranks[5].value
    dexRank.textContent = ranks[5].title
    dexCost.textContent = ranks[5].Cost

    conAttribute.value = ranks[5].value
    conTotal.textContent = ranks[5].value
    conRank.textContent = ranks[5].title
    conCost.textContent = ranks[5].Cost

    intAttribute.value = ranks[5].value
    intTotal.textContent = ranks[5].value
    intRank.textContent = ranks[5].title
    intCost.textContent = ranks[5].Cost

    wisAttribute.value = ranks[5].value
    wisTotal.textContent = ranks[5].value
    wisRank.textContent = ranks[5].title
    wisCost.textContent = ranks[5].Cost

    chaAttribute.value = ranks[5].value
    chaTotal.textContent = ranks[5].value
    chaRank.textContent = ranks[5].title
    chaCost.textContent = ranks[5].Cost

    Points.used = 0
    attrInput.value = "8"
    const info = scoreToPoint(8)
    attrOutput.children[0].textContent = `${info.title}:`
    attrOutput.children[1].textContent = `${info.value}`

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
    +`<span class="tooltip-font">(Strength + Dexterity/2 + Constitution x 2)</span></p>`
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
    +`<p>Spell Points are calculated as follows:<br>`
    +`<span class="tooltip-font">Intelligence/2 + (Wisdom + Charisma)/4</span></p>`
    document.querySelector(".app").appendChild(div)
    div.addEventListener("pointerleave", (e)=>{
        e.target.remove()
    })
})

attrInput.addEventListener("input", (e)=>{
    const regex = /^-?[0-9]+?$/;
    const input = e.target.value
    if(!regex.test(input)){
        e.target.value = ""
        attrOutput.children[0].textContent = "Rank:"
        attrOutput.children[1].textContent = "X"
        return
    }
    const int = parseInt(input)
    if(int < 1){
        e.target.value = ""
        attrOutput.children[0].textContent = "Rank:"
        attrOutput.children[1].textContent = "X"
        return
    }
    const info = scoreToPoint(int)
    attrOutput.children[0].textContent = `${info.title}:`
    attrOutput.children[1].textContent = `${info.value}`
})
