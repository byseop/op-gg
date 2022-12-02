export const db = {
  type: 'item',
  version: '10.15.1',
  basic: {
    name: '',
    rune: {
      isrune: false,
      tier: 1,
      type: 'red'
    },
    gold: {
      base: 0,
      total: 0,
      sell: 0,
      purchasable: false
    },
    group: '',
    description: '',
    colloq: ';',
    plaintext: '',
    consumed: false,
    stacks: 1,
    depth: 1,
    consumeOnFull: false,
    from: [],
    into: [],
    specialRecipe: 0,
    inStore: true,
    hideFromAll: false,
    requiredChampion: '',
    requiredAlly: '',
    stats: {
      FlatHPPoolMod: 0,
      rFlatHPModPerLevel: 0,
      FlatMPPoolMod: 0,
      rFlatMPModPerLevel: 0,
      PercentHPPoolMod: 0,
      PercentMPPoolMod: 0,
      FlatHPRegenMod: 0,
      rFlatHPRegenModPerLevel: 0,
      PercentHPRegenMod: 0,
      FlatMPRegenMod: 0,
      rFlatMPRegenModPerLevel: 0,
      PercentMPRegenMod: 0,
      FlatArmorMod: 0,
      rFlatArmorModPerLevel: 0,
      PercentArmorMod: 0,
      rFlatArmorPenetrationMod: 0,
      rFlatArmorPenetrationModPerLevel: 0,
      rPercentArmorPenetrationMod: 0,
      rPercentArmorPenetrationModPerLevel: 0,
      FlatPhysicalDamageMod: 0,
      rFlatPhysicalDamageModPerLevel: 0,
      PercentPhysicalDamageMod: 0,
      FlatMagicDamageMod: 0,
      rFlatMagicDamageModPerLevel: 0,
      PercentMagicDamageMod: 0,
      FlatMovementSpeedMod: 0,
      rFlatMovementSpeedModPerLevel: 0,
      PercentMovementSpeedMod: 0,
      rPercentMovementSpeedModPerLevel: 0,
      FlatAttackSpeedMod: 0,
      PercentAttackSpeedMod: 0,
      rPercentAttackSpeedModPerLevel: 0,
      rFlatDodgeMod: 0,
      rFlatDodgeModPerLevel: 0,
      PercentDodgeMod: 0,
      FlatCritChanceMod: 0,
      rFlatCritChanceModPerLevel: 0,
      PercentCritChanceMod: 0,
      FlatCritDamageMod: 0,
      rFlatCritDamageModPerLevel: 0,
      PercentCritDamageMod: 0,
      FlatBlockMod: 0,
      PercentBlockMod: 0,
      FlatSpellBlockMod: 0,
      rFlatSpellBlockModPerLevel: 0,
      PercentSpellBlockMod: 0,
      FlatEXPBonus: 0,
      PercentEXPBonus: 0,
      rPercentCooldownMod: 0,
      rPercentCooldownModPerLevel: 0,
      rFlatTimeDeadMod: 0,
      rFlatTimeDeadModPerLevel: 0,
      rPercentTimeDeadMod: 0,
      rPercentTimeDeadModPerLevel: 0,
      rFlatGoldPer10Mod: 0,
      rFlatMagicPenetrationMod: 0,
      rFlatMagicPenetrationModPerLevel: 0,
      rPercentMagicPenetrationMod: 0,
      rPercentMagicPenetrationModPerLevel: 0,
      FlatEnergyRegenMod: 0,
      rFlatEnergyRegenModPerLevel: 0,
      FlatEnergyPoolMod: 0,
      rFlatEnergyModPerLevel: 0,
      PercentLifeStealMod: 0,
      PercentSpellVampMod: 0
    },
    tags: [],
    maps: {
      '1': true,
      '8': true,
      '10': true,
      '12': true
    }
  },
  data: {
    '1001': {
      name: '속도의 장화',
      description:
        '<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +25',
      colloq: ';똥신;boots;speed',
      plaintext: '이동 속도가 약간 증가합니다.',
      into: ['3006', '3047', '3020', '3158', '3111', '3117', '3009', '4001'],
      image: {
        full: '1001.png',
        sprite: 'item0.png',
        group: 'item',
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 300,
        sell: 210
      },
      tags: ['Boots'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMovementSpeedMod: 25
      }
    },
    '1004': {
      name: '요정의 부적',
      description: '<stats><mana>기본 마나 재생 +25% </mana></stats>',
      colloq: ';요부;faerie;charm',
      plaintext: '마나 재생량이 약간 증가합니다.',
      into: ['3028', '3070', '3073', '3114'],
      image: {
        full: '1004.png',
        sprite: 'item0.png',
        group: 'item',
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 125,
        purchasable: true,
        total: 125,
        sell: 88
      },
      tags: ['ManaRegen'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {}
    },
    '1006': {
      name: '원기 회복의 구슬',
      description: '<stats>기본 체력 재생 +50% </stats>',
      colloq: ';완두콩;rejuvenation;bead',
      plaintext: '체력 재생량이 약간 증가합니다.',
      into: ['3077', '3801', '3194', '4401'],
      image: {
        full: '1006.png',
        sprite: 'item0.png',
        group: 'item',
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 150,
        purchasable: true,
        total: 150,
        sell: 105
      },
      tags: ['HealthRegen'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {}
    },
    '1011': {
      name: '거인의 허리띠',
      description: '<stats>체력 +380</stats>',
      colloq: ';자벨;giant;belt',
      plaintext: '체력이 대폭 증가합니다.',
      from: ['1028'],
      into: ['3083', '3084', '3022', '3143', '3742'],
      image: {
        full: '1011.png',
        sprite: 'item0.png',
        group: 'item',
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: ['Health'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 380
      },
      depth: 2
    },
    '1018': {
      name: '민첩성의 망토',
      description: '<stats>치명타 확률 +20%</stats>',
      colloq: ';cloak;agility',
      plaintext: '치명타 확률이 증가합니다.',
      into: ['3086', '3095', '3031', '3508'],
      image: {
        full: '1018.png',
        sprite: 'item0.png',
        group: 'item',
        x: 192,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 800,
        purchasable: true,
        total: 800,
        sell: 560
      },
      tags: ['CriticalStrike'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatCritChanceMod: 0.2
      }
    },
    '1026': {
      name: '방출의 마법봉',
      description: '<stats>주문력 +40</stats>',
      colloq: ';blasting;wand',
      plaintext: '주문력이 상당히 상승합니다.',
      into: [
        '3135',
        '3029',
        '3151',
        '3027',
        '3100',
        '3102',
        '3116',
        '3165',
        '3285'
      ],
      image: {
        full: '1026.png',
        sprite: 'item0.png',
        group: 'item',
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 850,
        purchasable: true,
        total: 850,
        sell: 595
      },
      tags: ['SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 40
      }
    },
    '1027': {
      name: '사파이어 수정',
      description: '<stats><mana>마나 +250</mana></stats>',
      colloq: ';sapphire;crystal;blue',
      plaintext: '마나가 증가합니다.',
      into: [
        '3057',
        '3070',
        '3010',
        '3024',
        '3073',
        '1402',
        '1414',
        '3802',
        '4104'
      ],
      image: {
        full: '1027.png',
        sprite: 'item0.png',
        group: 'item',
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 245
      },
      tags: ['Mana'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 250
      }
    },
    '1028': {
      name: '루비 수정',
      description: '<stats>체력 +150</stats>',
      colloq: ';ruby;crystal;red',
      plaintext: '체력이 증가합니다.',
      into: [
        '1011',
        '3075',
        '3211',
        '3136',
        '3068',
        '3010',
        '3801',
        '3044',
        '3052',
        '3053',
        '3067',
        '3814',
        '3116',
        '3748',
        '3751',
        '3916'
      ],
      image: {
        full: '1028.png',
        sprite: 'item0.png',
        group: 'item',
        x: 336,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 280
      },
      tags: ['Health'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 150
      }
    },
    '1029': {
      name: '천 갑옷',
      description: '<stats>방어력 +15</stats>',
      colloq: ';300;300갑;천갑;cloth;armor',
      plaintext: '방어력이 약간 증가합니다.',
      into: ['3047', '1031', '3191', '3024', '3082', '3076', '3105'],
      image: {
        full: '1029.png',
        sprite: 'item0.png',
        group: 'item',
        x: 384,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 300,
        sell: 210
      },
      tags: ['Armor'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatArmorMod: 15
      }
    },
    '1031': {
      name: '쇠사슬 조끼',
      description: '<stats>방어력 +40</stats>',
      colloq: ';700;700갑;chain;vest',
      plaintext: '방어력이 대폭 증가합니다.',
      from: ['1029'],
      into: ['3068', '3109', '3026', '3193', '3742'],
      image: {
        full: '1031.png',
        sprite: 'item0.png',
        group: 'item',
        x: 432,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 800,
        sell: 560
      },
      tags: ['Armor'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatArmorMod: 40
      },
      depth: 2
    },
    '1033': {
      name: '마법무효화의 망토',
      description: '<stats>마법 저항력 +25</stats>',
      colloq: ';null;magic;mantle',
      plaintext: '마법 저항력이 약간 증가합니다.',
      into: [
        '3111',
        '3211',
        '1057',
        '3028',
        '3140',
        '3155',
        '3105',
        '3190',
        '3102',
        '3194'
      ],
      image: {
        full: '1033.png',
        sprite: 'item0.png',
        group: 'item',
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 315
      },
      tags: ['SpellBlock'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 25
      }
    },
    '1036': {
      name: '롱소드',
      description: '<stats>공격력 +10</stats>',
      colloq: ';long;sword',
      plaintext: '공격력이 약간 증가합니다.',
      into: [
        '3077',
        '3123',
        '1053',
        '3155',
        '3134',
        '3179',
        '3035',
        '3044',
        '3052',
        '3072',
        '3133',
        '3144',
        '4003'
      ],
      image: {
        full: '1036.png',
        sprite: 'item0.png',
        group: 'item',
        x: 48,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 245
      },
      tags: ['Damage', 'Lane'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 10
      }
    },
    '1037': {
      name: '곡괭이',
      description: '<stats>공격력 +25</stats>',
      colloq: ';pick;axe;pickaxe',
      plaintext: '공격력이 상당히 증가합니다.',
      into: [
        '3124',
        '3004',
        '3005',
        '3008',
        '3031',
        '3036',
        '3053',
        '3074',
        '3814',
        '3139'
      ],
      image: {
        full: '1037.png',
        sprite: 'item0.png',
        group: 'item',
        x: 96,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 875,
        purchasable: true,
        total: 875,
        sell: 613
      },
      tags: ['Damage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 25
      }
    },
    '1038': {
      name: 'B.F. 대검',
      description: '<stats>공격력 +40</stats>',
      colloq: ';bf;절친;sword',
      plaintext: '공격력이 대폭 증가합니다.',
      into: ['3172', '3095', '3026', '3031', '3072', '3161', '3508', '4403'],
      image: {
        full: '1038.png',
        sprite: 'item0.png',
        group: 'item',
        x: 144,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 1300,
        purchasable: true,
        total: 1300,
        sell: 910
      },
      tags: ['Damage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 40
      }
    },
    '1039': {
      name: '사냥꾼의 부적',
      description:
        "<br><unique>고유 지속 효과 - 이빨:</unique> 몬스터에게 스킬 혹은 공격으로 피해를 주면 5초 동안 30의 체력을 흡수하며 몬스터를 불태워 60의 마법 피해를 줍니다. <mana>정글 또는 강에 있을 경우 잃은 마나에 비례하여 초당 최대 8의 마나가 회복됩니다.</mana> <font color='#99BBBB'><a href='SpecialJungleExperience'>괴물 사냥꾼</a></font>효과를 얻습니다. 체력이 30%보다 낮으면 회복 효과가 50% 증가합니다.<br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>",
      colloq: ';jungle;Jungle;정글',
      plaintext: '정글에서 마나 재생을 돕고 몬스터에게 피해를 입힙니다.',
      into: ['3706', '3715'],
      image: {
        full: '1039.png',
        sprite: 'item0.png',
        group: 'item',
        x: 192,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 245
      },
      tags: ['LifeSteal', 'ManaRegen', 'OnHit', 'Jungle'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '60',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '0.3',
        Effect6Amount: '0.5'
      }
    },
    '1041': {
      name: '사냥꾼의 마체테',
      description:
        "<stats>몬스터 대상 생명력 흡수 +10%</stats><br><br><unique>고유 지속 효과 - 손톱:</unique> 몬스터에게 기본 공격 적중 시 추가로 35의 피해를 입힙니다. <font color='#99BBBB'><a href='SpecialJungleExperience'>괴물 사냥꾼</a></font>효과를 얻습니다. 체력이 30%보다 낮으면 회복 효과가 50% 증가합니다.<br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>",
      colloq: ';정글;정글',
      plaintext: '몬스터 상대 공격력이 상승하고 생명력을 흡수합니다.',
      into: ['3706', '3715'],
      image: {
        full: '1041.png',
        sprite: 'item0.png',
        group: 'item',
        x: 240,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 245
      },
      tags: ['LifeSteal', 'OnHit', 'Jungle'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '35',
        Effect2Amount: '0.1',
        Effect3Amount: '0.3',
        Effect4Amount: '0.5'
      }
    },
    '1042': {
      name: '단검',
      description: '<stats>공격 속도 +12%</stats>',
      colloq: ';dagger',
      plaintext: '공격 속도가 약간 증가합니다.',
      into: [
        '3172',
        '1043',
        '3091',
        '3006',
        '2015',
        '3085',
        '3086',
        '3046',
        '3101',
        '3131'
      ],
      image: {
        full: '1042.png',
        sprite: 'item0.png',
        group: 'item',
        x: 288,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 300,
        sell: 210
      },
      tags: ['AttackSpeed'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        PercentAttackSpeedMod: 0.12
      }
    },
    '1043': {
      name: '곡궁',
      description:
        '<stats>공격 속도 +25%</stats><br><br><unique>고유 지속 효과:</unique> 기본 공격 적중 시 추가 15의 물리 피해를 입힙니다.',
      colloq: ';공속활;고래;recurve;bow',
      plaintext: '공격 속도가 대폭 증가합니다.',
      from: ['1042', '1042'],
      into: ['3091', '3153', '3124', '3675', '1416', '1419', '4105'],
      image: {
        full: '1043.png',
        sprite: 'item0.png',
        group: 'item',
        x: 336,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: ['AttackSpeed', 'OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        PercentAttackSpeedMod: 0.25
      },
      effect: {
        Effect1Amount: '15'
      },
      depth: 2
    },
    '1052': {
      name: '증폭의 고서',
      description: '<stats>주문력 +20</stats>',
      colloq: ';책;amptome;amplifying;tome',
      plaintext: '주문력이 약간 상승합니다.',
      into: [
        '3108',
        '3191',
        '3136',
        '3135',
        '3145',
        '3113',
        '3124',
        '3116',
        '3673',
        '3802',
        '3916'
      ],
      image: {
        full: '1052.png',
        sprite: 'item0.png',
        group: 'item',
        x: 384,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 435,
        purchasable: true,
        total: 435,
        sell: 305
      },
      tags: ['SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 20
      }
    },
    '1053': {
      name: '흡혈의 낫',
      description: '<stats>공격력 +15<br>생명력 흡수 +10%</stats>',
      colloq: ';흡낫;vampiric;scepter',
      plaintext: '기본 공격 시 체력을 회복합니다.',
      from: ['1036'],
      into: ['3072', '3074', '3812', '3139', '3144', '3181', '4403'],
      image: {
        full: '1053.png',
        sprite: 'item0.png',
        group: 'item',
        x: 432,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 550,
        purchasable: true,
        total: 900,
        sell: 630
      },
      tags: ['Damage', 'LifeSteal'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 15,
        PercentLifeStealMod: 0.1
      },
      depth: 2
    },
    '1054': {
      name: '도란의 방패',
      description:
        '<stats>체력 +80</stats><br><br><passive>기본 지속 효과: </passive>5초마다 6의 체력을 회복합니다.<br><passive>기본 지속 효과: </passive>미니언에게 기본 공격 적중 시 5의 추가 물리 피해를 입힙니다.<br><unique>고유 지속 효과:</unique> 적 챔피언에게 피해를 입으면 8초 동안 잃은 체력 %에 비례해 최대 40의 체력을 추가로 회복합니다. (원거리 챔피언이나 광역 피해, 주기적 피해의 경우 회복 효과가 66%로 적용됩니다.)',
      colloq: ';도란실드;doran;shield;dshield',
      plaintext: '방어에 특화된 시작 아이템입니다.',
      image: {
        full: '1054.png',
        sprite: 'item0.png',
        group: 'item',
        x: 0,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 180
      },
      tags: ['Health', 'HealthRegen', 'Lane'],
      maps: {
        '11': true,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 80,
        FlatHPRegenMod: 1.2
      },
      effect: {
        Effect1Amount: '8',
        Effect2Amount: '5',
        Effect3Amount: '40',
        Effect4Amount: '0.66'
      }
    },
    '1055': {
      name: '도란의 검',
      description: '<stats>공격력 +8<br>체력 +80<br>생명력 흡수 +3%</stats>',
      colloq: ';도란칼;doran;blade;dblade',
      plaintext: '공격에 특화된 시작 아이템입니다.',
      image: {
        full: '1055.png',
        sprite: 'item0.png',
        group: 'item',
        x: 48,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 180
      },
      tags: ['Damage', 'Health', 'Lane', 'LifeSteal'],
      maps: {
        '11': true,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 8,
        FlatHPPoolMod: 80,
        PercentLifeStealMod: 0.03
      },
      effect: {
        Effect1Amount: '10'
      }
    },
    '1056': {
      name: '도란의 반지',
      description:
        '<stats>체력 +60<br>주문력 +15<br><mana>5초당 마나 재생 +5</mana></stats><br><br><passive>기본 지속 효과: </passive>미니언에게 기본 공격 적중 시 5의 추가 물리 피해를 입힙니다.',
      colloq: ';도란링;doran;ring;dring',
      plaintext: '스킬 사용에 특화된 시작 아이템입니다.',
      image: {
        full: '1056.png',
        sprite: 'item0.png',
        group: 'item',
        x: 96,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
      },
      tags: ['Health', 'Lane', 'ManaRegen', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 60,
        FlatMagicDamageMod: 15
      },
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '5'
      }
    },
    '1057': {
      name: '음전자 망토',
      description: '<stats>마법 저항력 +40</stats>',
      colloq: ';조개;negatron;cloak',
      plaintext: '마법 저항력이 상당히 증가합니다.',
      from: ['1033'],
      into: ['3170', '3091', '3193', '3001', '4401'],
      image: {
        full: '1057.png',
        sprite: 'item0.png',
        group: 'item',
        x: 144,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 270,
        purchasable: true,
        total: 720,
        sell: 504
      },
      tags: ['SpellBlock'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 40
      },
      depth: 2
    },
    '1058': {
      name: '쓸데없이 큰 지팡이',
      description: '<stats>주문력 +60</stats>',
      colloq: ';nlr;needlessly;large;rod',
      plaintext: '주문력이 대폭 상승합니다.',
      into: ['3089', '3128', '3907', '4403'],
      image: {
        full: '1058.png',
        sprite: 'item0.png',
        group: 'item',
        x: 192,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 1250,
        purchasable: true,
        total: 1250,
        sell: 875
      },
      tags: ['SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 60
      }
    },
    '1082': {
      name: '암흑의 인장',
      description:
        '<stats>주문력 +10<br>물약 회복량 증가 +25%<br><mana>마나 +100</mana></stats><br><br><unique>고유 지속 효과 - 두려움:</unique> 영광 중첩 1회당 주문력이 3만큼 상승합니다.  <br><unique>고유 지속 효과 - 절체절명:</unique> 적 챔피언을 처치할 때마다 영광 중첩 2회, 어시스트를 올릴 때마다 영광 중첩 1회가 쌓이고 중첩은 최대 10회까지 쌓을 수 있습니다. 사망 시 중첩 4회가 사라집니다.',
      colloq: ';Noxian',
      plaintext:
        '주문력과 마나가 상승하며 적을 처치할 때마다 더욱 강력해집니다.',
      into: ['3041'],
      image: {
        full: '1082.png',
        sprite: 'item0.png',
        group: 'item',
        x: 240,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 140
      },
      tags: ['HealthRegen', 'SpellDamage', 'Mana', 'Lane'],
      maps: {
        '11': true,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 100,
        FlatMagicDamageMod: 10
      },
      effect: {
        Effect1Amount: '0.25',
        Effect2Amount: '2',
        Effect3Amount: '1',
        Effect4Amount: '10',
        Effect5Amount: '3',
        Effect6Amount: '4'
      }
    },
    '1083': {
      name: '수확의 낫',
      description:
        '<stats>공격력 +7<br>적중 시 생명력 흡수 +3</stats><br><br><unique>고유 지속 효과:</unique> 공격로 미니언 처치 시 추가로 1 골드를 얻습니다. 공격로 미니언을 총 100회 처치하면 즉시 350의 추가 골드를 얻고 고유 지속 효과가 비활성화됩니다.',
      colloq: ';도란칼',
      plaintext:
        '피해를 입히고 적중 시 생명력을 흡수합니다. 미니언 처치 시 추가 골드를 얻습니다.',
      image: {
        full: '1083.png',
        sprite: 'item0.png',
        group: 'item',
        x: 288,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 180
      },
      tags: ['Damage', 'LifeSteal', 'Lane'],
      maps: {
        '11': true,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 7
      },
      effect: {
        Effect1Amount: '3',
        Effect2Amount: '1',
        Effect3Amount: '100',
        Effect4Amount: '350'
      }
    },
    '1400': {
      name: '마법 부여: 용사',
      description:
        '<stats>공격력 +60<br>재사용 대기시간 감소 +10%</stats><br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>',
      colloq: '',
      plaintext: '공격력이 증가하고 재사용 대기시간이 감소합니다.',
      from: ['3133', '3706'],
      hideFromAll: true,
      image: {
        full: '1400.png',
        sprite: 'item0.png',
        group: 'item',
        x: 336,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 525,
        purchasable: true,
        total: 2625,
        sell: 1838
      },
      tags: [],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 60
      },
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '0.1',
        Effect7Amount: '2',
        Effect8Amount: '-0.2',
        Effect9Amount: '0',
        Effect10Amount: '0',
        Effect11Amount: '0',
        Effect12Amount: '0.3',
        Effect13Amount: '0.5'
      },
      depth: 3
    },
    '1401': {
      name: '마법 부여: 잿불거인',
      description:
        '<stats>체력 +300<br>추가 체력 +15%</stats><br><br><unique>고유 지속 효과 - 불사르기:</unique> 전투 중일 때 주변 적을 불태워 초당 <scaleLevel>[12~29]</scaleLevel>의 마법 피해를 입힙니다. 12초에 한 번, 적에게 이동 방해 효과 사용 시 <scaleLevel>[12~29]</scaleLevel><scaleHealth>(+추가 체력의 3%)</scaleHealth>만큼 추가 마법 피해를 입히고 불의 파도가 발생해 주변에 추가 피해를 입힙니다. 불사르기 피해량은 미니언과 몬스터 상대로 300% 증가합니다.<br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>',
      colloq: '',
      plaintext: '체력과 불사르기 오오라를 부여합니다.',
      from: ['3751', '3706'],
      hideFromAll: true,
      image: {
        full: '1401.png',
        sprite: 'item0.png',
        group: 'item',
        x: 384,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 2500,
        sell: 1750
      },
      tags: [],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 300
      },
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '0.1',
        Effect7Amount: '2',
        Effect8Amount: '-0.2',
        Effect9Amount: '0',
        Effect10Amount: '0',
        Effect11Amount: '0',
        Effect12Amount: '0.3',
        Effect13Amount: '0.5'
      },
      depth: 3
    },
    '1402': {
      name: '마법 부여: 룬의 메아리',
      description:
        '<stats>주문력 +80<br>재사용 대기시간 감소 +10%<br><mana>마나 +300</mana></stats><br><br><unique>고유 지속 효과 - 메아리:</unique> 이동하거나 스킬을 사용하면 중첩이 쌓입니다. 중첩이 100회 쌓이면 다음에 스킬로 피해를 입혔을 때 중첩을 모두 소모하여 최대 4명의 대상에게 60 (+ 주문력의 10%)의 추가 마법 피해를 입힙니다.<br><br>대형 몬스터에게는 250%의 피해를 입히며, 이 효과가 대형 몬스터에게 적중하면 잃은 마나의 25%를 회복합니다.<br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>',
      colloq: '',
      plaintext: '주문력이 증가하고 주기적으로 스킬이 강화됩니다.',
      from: ['3108', '1027', '3706'],
      hideFromAll: true,
      image: {
        full: '1402.png',
        sprite: 'item0.png',
        group: 'item',
        x: 432,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: true,
        total: 2500,
        sell: 1750
      },
      tags: [],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 300,
        FlatMagicDamageMod: 80
      },
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '0.1',
        Effect7Amount: '2',
        Effect8Amount: '-0.2',
        Effect9Amount: '0',
        Effect10Amount: '0',
        Effect11Amount: '0',
        Effect12Amount: '0.3',
        Effect13Amount: '0.5'
      },
      depth: 3
    },
    '1412': {
      name: '마법 부여: 용사',
      description:
        '<stats>공격력 +60<br>재사용 대기시간 감소 +10%</stats><br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>',
      colloq: '',
      plaintext: '공격력이 증가하고 재사용 대기시간이 감소합니다.',
      from: ['3133', '3715'],
      hideFromAll: true,
      image: {
        full: '1412.png',
        sprite: 'item0.png',
        group: 'item',
        x: 0,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 525,
        purchasable: true,
        total: 2625,
        sell: 1838
      },
      tags: [],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 60
      },
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '4',
        Effect7Amount: '3',
        Effect8Amount: '18',
        Effect9Amount: '2',
        Effect10Amount: '0.2',
        Effect11Amount: '0.1',
        Effect12Amount: '0.3',
        Effect13Amount: '0.5'
      },
      depth: 3
    },
    '1413': {
      name: '마법 부여: 잿불거인',
      description:
        '<stats>체력 +300<br>추가 체력 +15%</stats><br><br><unique>고유 지속 효과 - 불사르기:</unique> 전투 중일 때 주변 적을 불태워 초당 <scaleLevel>[12~29]</scaleLevel>의 마법 피해를 입힙니다. 12초에 한 번, 적에게 이동 방해 효과 사용 시 <scaleLevel>[12~29]</scaleLevel><scaleHealth>(+추가 체력의 3%)</scaleHealth>만큼 추가 마법 피해를 입히고 불의 파도가 발생해 주변에 추가 피해를 입힙니다. 불사르기 피해량은 미니언과 몬스터 상대로 300% 증가합니다.<br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>',
      colloq: '',
      plaintext: '체력과 불사르기 오오라를 부여합니다.',
      from: ['3751', '3715'],
      hideFromAll: true,
      image: {
        full: '1413.png',
        sprite: 'item0.png',
        group: 'item',
        x: 48,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 2500,
        sell: 1750
      },
      tags: [],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 300
      },
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '4',
        Effect7Amount: '3',
        Effect8Amount: '18',
        Effect9Amount: '2',
        Effect10Amount: '0.2',
        Effect11Amount: '0.1',
        Effect12Amount: '0.3',
        Effect13Amount: '0.4'
      },
      depth: 3
    },
    '1414': {
      name: '마법 부여: 룬의 메아리',
      description:
        '<stats>주문력 +80<br>재사용 대기시간 감소 +10%<br><mana>마나 +300</mana></stats><br><br><unique>고유 지속 효과 - 메아리:</unique> 이동하거나 스킬을 사용하면 중첩이 쌓입니다. 중첩이 100회 쌓이면 다음에 스킬로 피해를 입혔을 때 중첩을 모두 소모하여 최대 4명의 대상에게 60 (+ 주문력의 10%)의 추가 마법 피해를 입힙니다.<br><br>대형 몬스터에게는 250%의 피해를 입히며, 이 효과가 대형 몬스터에게 적중하면 잃은 마나의 25%를 회복합니다.<br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>',
      colloq: '',
      plaintext: '주문력이 증가하고 주기적으로 스킬이 강화됩니다.',
      from: ['3108', '1027', '3715'],
      hideFromAll: true,
      image: {
        full: '1414.png',
        sprite: 'item0.png',
        group: 'item',
        x: 96,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: true,
        total: 2500,
        sell: 1750
      },
      tags: [],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 300,
        FlatMagicDamageMod: 80
      },
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '4',
        Effect7Amount: '3',
        Effect8Amount: '18',
        Effect9Amount: '2',
        Effect10Amount: '0.2',
        Effect11Amount: '0.1',
        Effect12Amount: '0.3',
        Effect13Amount: '0.5'
      },
      depth: 3
    },
    '1416': {
      name: '마법 부여: 피갈퀴손',
      description:
        '<stats>공격 속도 +50%</stats><br><br><unique>고유 지속 효과:</unique> 기본 공격 적중 시 대상 최대 체력의 4%만큼 추가 물리 피해를 입힙니다. (몬스터와 미니언 상대로 최대 75)<br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>',
      colloq: '',
      plaintext: '공격 속도가 증가하고 대상의 체력에 비례한 피해를 입힙니다.',
      from: ['1043', '3706'],
      hideFromAll: true,
      image: {
        full: '1416.png',
        sprite: 'item0.png',
        group: 'item',
        x: 144,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 625,
        purchasable: true,
        total: 2625,
        sell: 1838
      },
      tags: [],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        PercentAttackSpeedMod: 0.5
      },
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '0.1',
        Effect7Amount: '2',
        Effect8Amount: '-0.2',
        Effect9Amount: '0',
        Effect10Amount: '0',
        Effect11Amount: '0',
        Effect12Amount: '0.3',
        Effect13Amount: '0.5'
      },
      depth: 3
    },
    '1419': {
      name: '마법 부여: 피갈퀴손',
      description:
        '<stats>공격 속도 +50%</stats><br><br><unique>고유 지속 효과:</unique> 기본 공격 적중 시 대상 최대 체력의 4%만큼 추가 물리 피해를 입힙니다. (몬스터와 미니언 상대로 최대 75)<br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>',
      colloq: '',
      plaintext: '공격 속도가 증가하고 대상의 체력에 비례한 피해를 입힙니다.',
      from: ['1043', '3715'],
      hideFromAll: true,
      image: {
        full: '1419.png',
        sprite: 'item0.png',
        group: 'item',
        x: 192,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 625,
        purchasable: true,
        total: 2625,
        sell: 1838
      },
      tags: [],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        PercentAttackSpeedMod: 0.5
      },
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '4',
        Effect7Amount: '3',
        Effect8Amount: '18',
        Effect9Amount: '2',
        Effect10Amount: '0',
        Effect11Amount: '0.1',
        Effect12Amount: '0.3',
        Effect13Amount: '0.5'
      },
      depth: 3
    },
    '2003': {
      name: '체력 물약',
      description:
        '<groupLimit>한 번에 한 종류의 회복 물약만 최대 5개까지 소지할 수 있습니다.</groupLimit><br><br><consumable>클릭하여 사용:</consumable> 15초에 걸쳐 150의 체력을 회복합니다.',
      colloq: ';포션;체포;빨간;빨포;potion;health',
      plaintext: '사용하면 일정 시간 동안 체력이 회복됩니다.',
      stacks: 5,
      consumed: true,
      image: {
        full: '2003.png',
        sprite: 'item0.png',
        group: 'item',
        x: 240,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 50,
        purchasable: true,
        total: 50,
        sell: 20
      },
      tags: ['Consumable', 'Jungle', 'Lane'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '150',
        Effect2Amount: '15'
      }
    },
    '2006': {
      name: '최후의 결전 체력 물약',
      description:
        '<groupLimit>한 번에 한 종류의 회복 물약만 최대 2개까지 소지할 수 있습니다.</groupLimit><br><br><consumable>클릭하여 사용:</consumable> 15초에 걸쳐 150의 체력을 회복합니다.',
      colloq: ';',
      plaintext: '사용하면 일정 시간 동안 체력이 회복됩니다.',
      stacks: 2,
      consumed: true,
      image: {
        full: '2006.png',
        sprite: 'item0.png',
        group: 'item',
        x: 288,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 50,
        purchasable: true,
        total: 50,
        sell: 20
      },
      tags: ['Consumable', 'Jungle', 'Lane'],
      maps: {
        '11': false,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '150',
        Effect2Amount: '15'
      }
    },
    '2009': {
      name: '원기회복의 완전한 비스킷',
      description:
        '<consumable>클릭하여 사용:</consumable> 10초에 걸쳐 체력 80과 마나 50을 회복합니다.',
      colloq: ';biscuit;rejuvenation',
      plaintext: '',
      consumed: true,
      inStore: false,
      image: {
        full: '2009.png',
        sprite: 'item0.png',
        group: 'item',
        x: 336,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {}
    },
    '2010': {
      name: '굳건한 의지의 완전한 비스킷',
      description:
        '<consumable>클릭하여 사용:</consumable> 5초에 걸쳐 잃은 체력과 마나의 10%를 회복합니다.',
      colloq: ';biscuit;rejuvenation',
      plaintext: '',
      stacks: 10,
      consumed: true,
      inStore: false,
      hideFromAll: true,
      image: {
        full: '2010.png',
        sprite: 'item0.png',
        group: 'item',
        x: 384,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 75,
        purchasable: false,
        total: 75,
        sell: 30
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '10'
      }
    },
    '2015': {
      name: '키르히아이스의 파편',
      description:
        "<stats>공격 속도 +15%</stats><br><br><unique>고유 지속 효과 - 충전 상태:</unique> 이동하거나 공격하면 <a href='Energized'>충전 상태</a>가 됩니다. <br><unique>고유 지속 효과 - 감전:</unique> 충전 상태로 공격 시 <magicDamage>80의 추가 마법 피해</magicDamage>를 입힙니다.",
      colloq: ';',
      plaintext: '공격 속도가 늘어나고 충전식 마법 피해를 입힙니다.',
      from: ['1042'],
      into: ['3094', '3095', '3087'],
      image: {
        full: '2015.png',
        sprite: 'item0.png',
        group: 'item',
        x: 432,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 700,
        sell: 490
      },
      tags: ['AttackSpeed', 'OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        PercentAttackSpeedMod: 0.15
      },
      effect: {
        Effect1Amount: '80'
      },
      depth: 2
    },
    '2031': {
      name: '충전형 물약',
      description:
        '<groupLimit>한 번에 한 종류의 회복 물약만 소지할 수 있습니다.</groupLimit><br><br><active>고유 사용 효과:</active> 충전량을 1회 소모해 12초 동안 125의 체력을 회복합니다. 상점 방문 시 2회의 충전량이 다시 채워집니다.',
      colloq: ';',
      plaintext: '일정 시간 동안 체력이 회복되며, 상점에 가면 다시 충전됩니다.',
      into: ['2033'],
      image: {
        full: '2031.png',
        sprite: 'item0.png',
        group: 'item',
        x: 0,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 150,
        purchasable: true,
        total: 150,
        sell: 60
      },
      tags: ['HealthRegen', 'Consumable', 'Active', 'Lane', 'Jungle'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '125',
        Effect2Amount: '0',
        Effect3Amount: '12',
        Effect4Amount: '2'
      }
    },
    '2033': {
      name: '부패 물약',
      description:
        "<groupLimit>한 번에 한 종류의 회복 물약만 소지할 수 있습니다.</groupLimit><br><br><active>고유 사용 효과:</active> 충전량을 1회 소모해 12초 동안 125의 체력과 75의 마나를 회복하고, 그 동안 <font color='#FF8811'><u>부패의 손길</u></font>을 활성화합니다. 상점 방문 시 3회의 충전량이 다시 채워집니다.<br><br><font color='#FF8811'><u>부패의 손길:</u></font> 적 챔피언에게 주문 및 공격으로 피해를 입히면 적을 불태워 3초 동안 15의 마법 피해를 입힙니다. (광역 및 지속 피해 스킬 사용 시에는 피해의 50%만 적용됩니다. 피해량은 챔피언 레벨에 비례해 증가합니다.)<br><br><rules>(부패 물약은 체력과 마나가 모두 차 있을 때도 사용할 수 있습니다.)</rules>",
      colloq: ';',
      plaintext:
        '체력과 마나가 일정 시간 동안 회복되고 전투 능력을 상승시킵니다. 상점에 가면 다시 충전됩니다.',
      from: ['2031'],
      image: {
        full: '2033.png',
        sprite: 'item0.png',
        group: 'item',
        x: 48,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 500,
        sell: 200
      },
      tags: ['Active', 'Consumable', 'HealthRegen', 'Lane', 'ManaRegen'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '125',
        Effect2Amount: '75',
        Effect3Amount: '12',
        Effect4Amount: '3',
        Effect5Amount: '10',
        Effect6Amount: '0.1',
        Effect7Amount: '15',
        Effect8Amount: '3',
        Effect9Amount: '0.5'
      },
      depth: 2
    },
    '2047': {
      name: '예언자의 추출액',
      description:
        '<consumable>클릭하여 사용:</consumable> 5분 동안 주위의 투명하거나 보이지 않는 유닛을 감지하는 능력이 생깁니다.',
      colloq: ';오라클;oracle;extract',
      plaintext: '챔피언이 투명하거나 보이지 않는 적 유닛을 볼 수 있게 됩니다.',
      consumed: true,
      consumeOnFull: true,
      image: {
        full: '2047.png',
        sprite: 'item0.png',
        group: 'item',
        x: 96,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 300,
        sell: 120
      },
      tags: ['Consumable', 'Stealth', 'Vision'],
      maps: {
        '11': false,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {}
    },
    '2051': {
      name: '수호자의 뿔피리',
      description:
        '<stats>체력 +150</stats><br><br><passive>기본 지속 효과:</passive> 5초마다 20의 체력을 회복합니다.<br><unique>고유 지속 효과:</unique> 적 챔피언의 기본 공격과 스킬 공격 피해량을 12만큼 막아줍니다. (지속 피해 스킬의 경우 25%의 효과).<br><br><groupLimit>수호자 아이템은 1개만 소유할 수 있습니다.</groupLimit>',
      colloq:
        'Golden Arm of Kobe;Golden Bicep of Kobe;Horn; Horn of the ManWolf; ManWolf',
      plaintext: '탱커에게 특화된 시작 아이템입니다.',
      image: {
        full: '2051.png',
        sprite: 'item0.png',
        group: 'item',
        x: 144,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 950,
        purchasable: true,
        total: 950,
        sell: 380
      },
      tags: ['Health', 'HealthRegen', 'Lane'],
      maps: {
        '11': false,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 150,
        FlatHPRegenMod: 4
      },
      effect: {
        Effect1Amount: '12',
        Effect2Amount: '0.25'
      }
    },
    '2052': {
      name: '포로 간식',
      description:
        '방목해서 신선한 풀을 먹여 키운 아바로사 암탉과 화학 비료를 쓰지 않고 재배한 프렐요드산 유기농 허브로 맛있게 조리한 영양 만점 요리. 포로에게 먹이면 신나서 갸르릉거립니다.<br><br><i>수익금은 전액 녹서스 동물 학대 반대 운동 기금으로 기부됩니다.</i>',
      colloq: ';poro;snack;snax',
      plaintext: '',
      stacks: 2,
      consumed: true,
      inStore: false,
      image: {
        full: '2052.png',
        sprite: 'item0.png',
        group: 'item',
        x: 192,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {}
    },
    '2054': {
      name: '다이어트 포로 간식',
      description:
        '맛은 그대로, 칼로리는 절반! 몸매에도 건강에도 좋은 신제품입니다.<br><br><consumable>클릭해서 사용:</consumable> 포로에게 맛있고 건강한 새 간식을 먹이세요.',
      colloq: '',
      plaintext: '',
      consumed: true,
      inStore: false,
      image: {
        full: '2054.png',
        sprite: 'item0.png',
        group: 'item',
        x: 240,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {}
    },
    '2055': {
      name: '제어 와드',
      description:
        "<groupLimit>제어 와드는 가방에 2개만 소지할 수 있습니다.</groupLimit><br><br><consumable>클릭하여 사용:</consumable> 주변 지역을 드러내 주는 와드를 설치합니다. 근처의 투명한 덫과 와드를 드러내고, 추가로 와드를 무력화시킵니다. 위장 중인 유닛의 모습도 드러냅니다. 하지만 제어 와드로 다른 제어 와드를 무력화시킬 수는 없습니다.<br><br>플레이어 당 맵에 설치할 수 있는 <font color='#BBFFFF'>제어 와드</font>의 개수는  1개로 제한됩니다.",
      colloq: 'orange;',
      plaintext: '일정 지역 안의 와드와 투명 덫을 무력화시킵니다.',
      stacks: 2,
      consumed: true,
      image: {
        full: '2055.png',
        sprite: 'item0.png',
        group: 'item',
        x: 288,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 75,
        purchasable: true,
        total: 75,
        sell: 30
      },
      tags: ['Consumable', 'Lane', 'Stealth', 'Vision'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '1',
        Effect2Amount: '2'
      }
    },
    '2065': {
      name: '슈렐리아의 몽상',
      description:
        '<stats>체력 +300<br>재사용 대기시간 감소 +10%<br><mana>기본 마나 재생 +100% </mana><br>기본 체력 재생 +100% <br></stats><br><unique>고유 지속 효과:</unique> 보호막 및 체력 회복 +10%<br><active>고유 사용 효과:</active> 3초 동안 자신과 근처 아군의 이동 속도가 +40% 증가합니다. (재사용 대기시간 90초)',
      colloq:
        ';shurelya;reverie;슈렐;talisman;ascension;승천;tbfpffldk;tbfpf;ahdtkd;',
      plaintext: '사용하면 주변 아군의 속도가 빨라집니다.',
      from: ['3114', '3801'],
      image: {
        full: '2065.png',
        sprite: 'item0.png',
        group: 'item',
        x: 336,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 2050,
        sell: 1435
      },
      tags: [
        'Health',
        'HealthRegen',
        'ManaRegen',
        'Active',
        'CooldownReduction',
        'NonbootsMovement'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 300
      },
      effect: {
        Effect1Amount: '0.4',
        Effect2Amount: '3',
        Effect3Amount: '90',
        Effect4Amount: '-0.1',
        Effect5Amount: '0',
        Effect6Amount: '2',
        Effect7Amount: '0.1',
        Effect8Amount: '1000'
      },
      depth: 3
    },
    '2138': {
      name: '강철의 영약',
      description:
        "<stats><levelLimit>9레벨 이상 구매 가능</levelLimit></stats><br><br><consumable>클릭하여 사용:</consumable> 3분 동안 체력이 +300, 강인함이 25% 증가하고, 챔피언이 거대해지며, <font color='#FF8811'><u>강철의 길</u></font> 효과가 생깁니다.<br><br><font color='#FF8811'><u>강철의 길:</u></font> 이동하면 뒤로 길이 생겨 그 위의 아군 챔피언들은 이동 속도가 15% 상승합니다.<br><br><rules>(영약 효과는 한 번에 하나만 활성화됩니다.)</rules>",
      colloq: ';white',
      plaintext:
        '일시적으로 방어 관련 능력치를 높여줍니다. 아군이 뒤따라올 수 있는 자취를 남깁니다.',
      consumed: true,
      consumeOnFull: true,
      image: {
        full: '2138.png',
        sprite: 'item0.png',
        group: 'item',
        x: 384,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 500,
        sell: 200
      },
      tags: ['Health', 'Consumable', 'NonbootsMovement', 'Tenacity'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '300',
        Effect2Amount: '0.25',
        Effect3Amount: '3',
        Effect4Amount: '0.15',
        Effect5Amount: '0.15',
        Effect6Amount: '0',
        Effect7Amount: '0',
        Effect8Amount: '9'
      }
    },
    '2139': {
      name: '마법의 영약',
      description:
        "<stats><levelLimit>9레벨 이상 구매 가능</levelLimit></stats><br><br><consumable>클릭하여 사용:</consumable> 3분 동안 주문력 +50, 5초당 마나 재생량이 +15 오르며 <font color='#FF8811'><u>마법</u></font> 효과가 생깁니다. <br><br><font color='#FF8811'><u>마법:</u></font> 챔피언이나 포탑에 피해를 입히면 25의 추가 고정 피해를 입힙니다. 이 효과는 챔피언 상대로는 5초의 재사용 대기시간이 적용되지만, 포탑을 공격할 때는 재사용 대기시간이 없습니다.<br><br><rules>(영약 효과는 한 번에 하나만 활성화됩니다.)</rules><br>",
      colloq: ';blue',
      plaintext:
        '일시적으로 주문력을 올려주며, 챔피언과 포탑에 대한 추가 피해량이 적용됩니다.',
      consumed: true,
      consumeOnFull: true,
      image: {
        full: '2139.png',
        sprite: 'item0.png',
        group: 'item',
        x: 432,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 500,
        sell: 200
      },
      tags: ['Consumable', 'ManaRegen', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '50',
        Effect2Amount: '50',
        Effect3Amount: '25',
        Effect4Amount: '3',
        Effect5Amount: '5',
        Effect6Amount: '3',
        Effect7Amount: '0',
        Effect8Amount: '9'
      }
    },
    '2140': {
      name: '분노의 영약',
      description:
        "<stats><levelLimit>9레벨 이상 구매 가능</levelLimit></stats><br><br><consumable>클릭하여 사용:</consumable> 3분 동안 공격력이 +30 상승하고 <font color='#FF8811'><u>피의 갈망</u></font> 효과가 생깁니다.<br><br><font color='#FF8811'><u>피의 갈망:</u></font> 챔피언에게 물리 피해를 입히면, 입힌 피해량의 15%만큼 체력이 회복됩니다.<br><br><rules>(영약 효과는 한 번에 하나만 활성화됩니다.)</rules>",
      colloq: ';red',
      plaintext:
        '일시적으로 공격력을 올려주며, 챔피언에게 물리 피해를 입히면 체력이 회복됩니다.',
      consumed: true,
      consumeOnFull: true,
      image: {
        full: '2140.png',
        sprite: 'item0.png',
        group: 'item',
        x: 0,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 500,
        sell: 200
      },
      tags: ['Consumable', 'Damage', 'LifeSteal', 'SpellVamp'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '30',
        Effect2Amount: '30',
        Effect3Amount: '0.15',
        Effect4Amount: '3',
        Effect5Amount: '0',
        Effect6Amount: '0',
        Effect7Amount: '0',
        Effect8Amount: '9'
      }
    },
    '2403': {
      name: '미니언 해체분석기',
      description:
        '<consumable>클릭하여 사용:</consumable> 대상 공격로 미니언 처치 (사거리 550, 재사용 대기시간 10초)',
      colloq: ';',
      plaintext: '',
      stacks: 10,
      consumed: true,
      inStore: false,
      hideFromAll: true,
      image: {
        full: '2403.png',
        sprite: 'item0.png',
        group: 'item',
        x: 48,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {}
    },
    '2419': {
      name: '초시계 키트',
      description:
        '14분 후 초시계로 바뀝니다. 처치 관여 시 이 시간이 2분씩 감소합니다. 이 초시계는 상위 아이템을 구매할 때 250골드만큼 기여합니다.<br><br><rules>(초시계의 원가는 650골드입니다.)</rules>',
      colloq: '',
      plaintext: '',
      inStore: false,
      into: ['2420'],
      image: {
        full: '2419.png',
        sprite: 'item0.png',
        group: 'item',
        x: 96,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ['Active'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {}
    },
    '2420': {
      name: '초시계',
      description:
        '<active>고유 사용 효과 - 경직:</active> 챔피언이 2.5초 동안 아무런 행동도 취할 수 없는 대신 공격도 받지 않는 무적 상태가 됩니다. (단 1회 사용 가능)',
      colloq: ';whsdi;존야;모래시계',
      plaintext:
        '사용하면 아무런 행동도 취할 수 없는 대신 공격도 받지 않는 무적 상태가 됩니다.',
      into: ['3157', '3026', '3193', '4003'],
      image: {
        full: '2420.png',
        sprite: 'item0.png',
        group: 'item',
        x: 144,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 650,
        sell: 260
      },
      tags: ['Active'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '2.5'
      }
    },
    '2421': {
      name: '망가진 초시계',
      description:
        '<unique>고유 지속 효과:</unique> 망가졌지만 업그레이드는 가능합니다.<br><br><rules>초시계를 하나 망가뜨린 후에는 상점에서 망가진 초시계만 살 수 있습니다.</rules>',
      colloq: ';',
      plaintext: '초시계로 업그레이드할 수 있습니다.',
      hideFromAll: true,
      into: ['3157', '3026', '3193'],
      image: {
        full: '2421.png',
        sprite: 'item0.png',
        group: 'item',
        x: 192,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 650,
        sell: 260
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '0',
        Effect3Amount: '0',
        Effect4Amount: '0',
        Effect5Amount: '300'
      }
    },
    '2422': {
      name: '약간 신비한 장화',
      description:
        '<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +25<br><unique>고유 지속 효과:</unique> 이동 속도 +10<br><br>약간 신비한 장화로 제작한 장화는 이동 속도 +10 효과가 있습니다.',
      colloq: ';',
      plaintext: '이동 속도가 약간 증가합니다.',
      inStore: false,
      into: ['3006', '3047', '3020', '3158', '3111', '3117', '3009', '4001'],
      image: {
        full: '2422.png',
        sprite: 'item0.png',
        group: 'item',
        x: 240,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: false,
        total: 300,
        sell: 210
      },
      tags: ['Boots'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMovementSpeedMod: 25
      }
    },
    '2423': {
      name: '완벽한 초시계',
      description:
        '<active>고유 사용 효과 - 경직:</active> 챔피언이 2.5초 동안 아무런 행동도 취할 수 없는 대신 공격도 받지 않는 무적 상태가 됩니다. (단 1회 사용 가능)',
      colloq: ';whsdi;존야;모래시계',
      plaintext:
        '사용하면 아무런 행동도 취할 수 없는 대신 공격도 받지 않는 무적 상태가 됩니다.',
      inStore: false,
      into: ['3157', '3026', '3193'],
      image: {
        full: '2423.png',
        sprite: 'item0.png',
        group: 'item',
        x: 288,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: false,
        total: 650,
        sell: 260
      },
      tags: ['Active'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '2.5'
      }
    },
    '2424': {
      name: '망가진 초시계',
      description:
        '<unique>고유 지속 효과:</unique> 망가졌지만 업그레이드는 가능합니다.<br><br><rules>초시계를 하나 망가뜨린 후에는 상점에서 망가진 초시계만 살 수 있습니다.</rules>',
      colloq: '',
      plaintext: '',
      inStore: false,
      hideFromAll: true,
      into: ['3157', '3026', '3193'],
      image: {
        full: '2424.png',
        sprite: 'item0.png',
        group: 'item',
        x: 336,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: false,
        total: 650,
        sell: 260
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '0',
        Effect3Amount: '0',
        Effect4Amount: '0',
        Effect5Amount: '300'
      }
    },
    '3001': {
      name: '심연의 가면',
      description:
        '<stats>체력 +350<br><mana>마나 +300</mana><br>마법 저항력 +55<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 영원:</unique> 챔피언으로부터 입은 피해의 15%를 마나로 돌려받습니다. 마나 소모 시 20%를 체력으로 돌려받습니다. (스킬 사용 1회당 최대 25까지)<br><aura>고유 오오라:</aura> 주변 적 챔피언이 입는 마법 피해가 15% 증가합니다.',
      colloq: ';심홀;어비셜;abyssal;scepter',
      plaintext: '근처의 적이 입는 마법 피해가 증가합니다.',
      from: ['3010', '1057'],
      into: ['3379'],
      image: {
        full: '3001.png',
        sprite: 'item0.png',
        group: 'item',
        x: 384,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 1180,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: [
        'Health',
        'SpellBlock',
        'HealthRegen',
        'Mana',
        'ManaRegen',
        'Aura',
        'CooldownReduction',
        'MagicPenetration'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 350,
        FlatSpellBlockMod: 55,
        FlatMPPoolMod: 300
      },
      effect: {
        Effect1Amount: '-10',
        Effect2Amount: '-25',
        Effect3Amount: '0.15',
        Effect4Amount: '25',
        Effect5Amount: '0.2',
        Effect6Amount: '0.15',
        Effect7Amount: '325'
      },
      depth: 3
    },
    '3003': {
      name: '대천사의 지팡이',
      description:
        '<stats>주문력 +50<br><mana>마나 +650</mana><br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 가속:</unique> 재사용 대기시간이 추가로 10% 감소합니다.<br><mana><unique>고유 지속 효과 - 경탄:</unique> 최대 마나의 1%만큼 주문력이 오릅니다. 마나를 소모하면 소모량의 25%를 돌려받습니다.<br><unique>고유 지속 효과 - 마나 충전:</unique> 마나를 소모할 때마다 최대 마나량이 +8 (최대 마나 +750) 증가합니다. (매 12초당 최대 3번 발동)<br><br>마나 +750에 도달하면 대천사의 포옹으로 변합니다.</mana><br><br><groupLimit>여신의 눈물 계열 아이템 소지 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: ';aa;angel;staff;archangel',
      plaintext: '최대 마나량에 따라 주문력이 대폭 상승합니다.',
      from: ['3070', '3802'],
      image: {
        full: '3003.png',
        sprite: 'item0.png',
        group: 'item',
        x: 432,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 1050,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ['SpellDamage', 'Mana', 'ManaRegen', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 650,
        FlatMagicDamageMod: 50
      },
      effect: {
        Effect1Amount: '0.01',
        Effect2Amount: '8',
        Effect3Amount: '750',
        Effect4Amount: '2',
        Effect5Amount: '8',
        Effect6Amount: '0',
        Effect7Amount: '0.25',
        Effect8Amount: '3',
        Effect9Amount: '12',
        Effect10Amount: '-0.1'
      },
      depth: 3
    },
    '3004': {
      name: '마나무네',
      description:
        '<stats>공격력 +35<br><mana>마나 +250</mana></stats><br><br><mana><unique>고유 지속 효과 - 경탄:</unique> 최대 마나의 2%만큼 추가 공격력을 얻습니다. 마나를 사용하면 소모량의 15%를 돌려받습니다.<br><unique>고유 지속 효과 - 마나 충전:</unique> 기본 공격 또는 마나 소비 시 최대 마나량이 +5만큼 늘어납니다. (최대 +750 마나) (매 12초당 최대 3번 발동)<br><br>마나 +750에 도달하면 무라마나로 변합니다.</mana><br><br><groupLimit>여신의 눈물 계열 아이템 소지 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: ';manamune',
      plaintext: '최대 마나량에 따라 공격력이 상승합니다.',
      from: ['3070', '1037'],
      image: {
        full: '3004.png',
        sprite: 'item0.png',
        group: 'item',
        x: 0,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 675,
        purchasable: true,
        total: 2400,
        sell: 1680
      },
      tags: ['Damage', 'Mana', 'ManaRegen', 'OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 35,
        FlatMPPoolMod: 250
      },
      effect: {
        Effect1Amount: '0.02',
        Effect2Amount: '4',
        Effect3Amount: '750',
        Effect4Amount: '2',
        Effect5Amount: '8',
        Effect6Amount: '1',
        Effect7Amount: '0.15',
        Effect8Amount: '5',
        Effect9Amount: '3',
        Effect10Amount: '12'
      },
      depth: 3
    },
    '3005': {
      name: '아트마의 심판',
      description:
        '<stats>공격력 +25<br>방어력 +30<br>마법 저항력 +30</stats><br><br><unique>고유 지속 효과:</unique> 적 챔피언이나 포탑, 에픽 몬스터와 전투 시 매초 최대 체력의 0.5%에 해당하는 공격력을 얻습니다. 최대 2.5%의 공격력을 얻을 수 있습니다.',
      colloq:
        ";심판;atma;reckoning;atma's reckoning;dkxmak;dkxmakdml tlavks;dkxmakdmltlavks",
      plaintext: '최대 체력에 따라 공격력이 상승합니다.',
      from: ['3105', '1037'],
      image: {
        full: '3005.png',
        sprite: 'item0.png',
        group: 'item',
        x: 48,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 925,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ['SpellBlock', 'Armor', 'Damage'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 25,
        FlatSpellBlockMod: 30,
        FlatArmorMod: 30
      },
      effect: {
        Effect1Amount: '0.005',
        Effect2Amount: '5',
        Effect3Amount: '0.025',
        Effect4Amount: '25',
        Effect5Amount: '0.2',
        Effect6Amount: '75'
      },
      depth: 3
    },
    '3006': {
      name: '광전사의 군화',
      description:
        '<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><stats> 공격 속도 +35%</stats><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45',
      colloq: ';berserker;greaves',
      plaintext: '이동 속도와 공격 속도가 상승합니다.',
      from: ['1001', '1042'],
      image: {
        full: '3006.png',
        sprite: 'item0.png',
        group: 'item',
        x: 96,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ['AttackSpeed', 'Boots'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMovementSpeedMod: 45,
        PercentAttackSpeedMod: 0.35
      },
      depth: 2
    },
    '3007': {
      name: '대천사의 지팡이 (급속 충전)',
      description:
        '<stats>주문력 +50<br><mana>마나 +650</mana><br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 가속:</unique> 재사용 대기시간이 추가로 10% 감소합니다.<br><mana><unique>고유 지속 효과 - 경탄:</unique> 최대 마나의 1%만큼 주문력이 오릅니다. 마나를 소모하면 소모량의 25%를 돌려받습니다. <br><unique>고유 지속 효과 - 마나 충전:</unique> 마나를 소모할 때마다 최대 마나량이 +12 (최대 마나 +750) 증가합니다. (매 12초당 최대 3번 발동)<br><br>마나 +750에 도달하면 대천사의 포옹으로 변합니다.</mana>',
      colloq: ';aa;archangel;angel;staff',
      plaintext: '최대 마나량에 따라 주문력이 대폭 상승합니다.',
      from: ['3073', '3802'],
      image: {
        full: '3007.png',
        sprite: 'item0.png',
        group: 'item',
        x: 144,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 1050,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ['SpellDamage', 'Mana', 'ManaRegen', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 650,
        FlatMagicDamageMod: 50
      },
      effect: {
        Effect1Amount: '0.01',
        Effect2Amount: '12',
        Effect3Amount: '750',
        Effect4Amount: '2',
        Effect5Amount: '8',
        Effect6Amount: '0',
        Effect7Amount: '0.25',
        Effect8Amount: '3',
        Effect9Amount: '12',
        Effect10Amount: '-0.1'
      },
      depth: 3
    },
    '3008': {
      name: '마나무네 (급속 충전)',
      description:
        '<stats>공격력 +35<br><mana>마나 +250</mana></stats><br><br><mana><unique>고유 지속 효과 - 경탄:</unique> 최대 마나의 2%만큼 추가 공격력을 얻습니다. 마나를 사용하면 소모량의 15%를 돌려받습니다.<br><unique>고유 지속 효과 - 마나 충전:</unique> 기본 공격 또는 마나 소비 시 최대 마나량이 +6만큼 늘어납니다. (최대 +750 마나) (매 12초당 최대 3번 발동)<br><br>마나 +750에 도달하면 무라마나로 변합니다.</mana>',
      colloq: ';manamune',
      plaintext: '최대 마나량에 따라 공격력이 상승합니다.',
      from: ['3073', '1037'],
      image: {
        full: '3008.png',
        sprite: 'item0.png',
        group: 'item',
        x: 192,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 675,
        purchasable: true,
        total: 2400,
        sell: 1680
      },
      tags: ['Damage', 'Mana', 'ManaRegen', 'OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 35,
        FlatMPPoolMod: 250
      },
      effect: {
        Effect1Amount: '0.02',
        Effect2Amount: '6',
        Effect3Amount: '750',
        Effect4Amount: '2',
        Effect5Amount: '8',
        Effect6Amount: '1',
        Effect7Amount: '0.15',
        Effect8Amount: '6',
        Effect9Amount: '3',
        Effect10Amount: '12'
      },
      depth: 3
    },
    '3009': {
      name: '신속의 장화',
      description:
        '<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +60<br><unique>고유 지속 효과 - 둔화 저항:</unique> 이동 속도 둔화 효과가 25% 줄어듭니다.',
      colloq: ';boots;swiftness',
      plaintext: '이동 속도가 증가하고, 둔화 효과를 감소시킵니다.',
      from: ['1001'],
      image: {
        full: '3009.png',
        sprite: 'item0.png',
        group: 'item',
        x: 240,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 900,
        sell: 630
      },
      tags: ['Boots'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMovementSpeedMod: 60
      },
      effect: {
        Effect1Amount: '0.25'
      },
      depth: 2
    },
    '3010': {
      name: '억겁의 카탈리스트',
      description:
        '<stats>체력 +225<br><mana>마나 +300</mana></stats><br><br><unique>고유 지속 효과 - 영원:</unique> 챔피언으로부터 입은 피해의 15%를 마나로 돌려받습니다.<br><br>마나 소모 시 20%를 체력으로 돌려받습니다. (스킬 사용 1회당 최대 15까지)<br><br><rules>활성화 (토글) 스킬의 경우 초당 최대 15의 체력이 회복됩니다.</rules>',
      colloq: ';catalyst;protector',
      plaintext: '마나를 소모해 체력을 회복합니다.',
      from: ['1028', '1027'],
      into: ['3027', '3029', '3001', '4402'],
      image: {
        full: '3010.png',
        sprite: 'item0.png',
        group: 'item',
        x: 288,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ['Health', 'HealthRegen', 'Mana', 'ManaRegen'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 225,
        FlatMPPoolMod: 300
      },
      effect: {
        Effect1Amount: '150',
        Effect2Amount: '200',
        Effect3Amount: '8',
        Effect4Amount: '15',
        Effect5Amount: '0.2',
        Effect6Amount: '0.15'
      },
      depth: 2
    },
    '3020': {
      name: '마법사의 신발',
      description:
        "<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><stats><a href='FlatMagicPen'>마법 관통력</a> +18</stats><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45",
      colloq: ';sorcerer;shoes',
      plaintext: '이동 속도와 마법 피해량이 증가합니다.',
      from: ['1001'],
      image: {
        full: '3020.png',
        sprite: 'item0.png',
        group: 'item',
        x: 336,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 800,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ['Boots', 'MagicPenetration'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMovementSpeedMod: 45
      },
      effect: {
        Effect1Amount: '18'
      },
      depth: 2
    },
    '3022': {
      name: '얼어붙은 망치',
      description:
        '<stats>체력 +700<br>공격력 +30</stats><br><br><unique>고유 지속 효과 - 얼음:</unique> 기본 공격 적중 시 대상의 이동 속도가 1.5초 동안 감소합니다. (근접 공격 시 40%, 원거리 공격 시 20%)',
      colloq: ';얼망;fm;frozen;mallet',
      plaintext: '기본 공격으로 피해를 입힌 적이 둔화됩니다.',
      from: ['3052', '1011'],
      image: {
        full: '3022.png',
        sprite: 'item0.png',
        group: 'item',
        x: 384,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 900,
        purchasable: true,
        total: 3100,
        sell: 2170
      },
      tags: ['Damage', 'Health', 'OnHit', 'Slow'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 30,
        FlatHPPoolMod: 700
      },
      effect: {
        Effect1Amount: '1.5',
        Effect2Amount: '0.4',
        Effect3Amount: '0.2'
      },
      depth: 3
    },
    '3024': {
      name: '빙하의 장막',
      description:
        '<stats>방어력 +20<br><mana>마나 +250</mana></stats><br><br><unique>고유 지속 효과:</unique> 재사용 대기시간 감소 +10%',
      colloq: ';glacial;shroud',
      plaintext: '방어력과 재사용 대기시간 감소율이 증가합니다.',
      from: ['1027', '1029'],
      into: ['3110', '3025', '3050', '3800'],
      image: {
        full: '3024.png',
        sprite: 'item0.png',
        group: 'item',
        x: 432,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: true,
        total: 900,
        sell: 630
      },
      tags: ['Armor', 'CooldownReduction', 'Mana'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 250,
        FlatArmorMod: 20
      },
      effect: {
        Effect1Amount: '-0.1'
      },
      depth: 2
    },
    '3025': {
      name: '얼어붙은 건틀릿',
      description:
        '<stats>방어력 +65<br>재사용 대기시간 감소 +20%<br><mana>마나 +500</mana></stats><br><br><unique>고유 지속 효과 - 주문 검:</unique> 스킬을 사용하고 나면 다음 기본 공격 적중 시 대상 근처의 적들에게 기본 공격력의 100%만큼 추가 물리 피해를 입히고 2초간 역장을 생성하여, 안에 갇힌 적의 속도를 30% 늦춥니다. (재사용 대기시간 1.5초)<br><br>역장의 크기는 추가 방어력에 비례해 커집니다.',
      colloq: ';얼건;frozen fist;iceborn;gauntlet',
      plaintext: '스킬을 시전한 후 기본 공격을 하면 둔화 역장이 생성됩니다.',
      from: ['3057', '3024'],
      into: ['3387'],
      image: {
        full: '3025.png',
        sprite: 'item0.png',
        group: 'item',
        x: 0,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 750,
        purchasable: true,
        total: 2700,
        sell: 1890
      },
      tags: ['Armor', 'Mana', 'CooldownReduction', 'Slow'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 500,
        FlatArmorMod: 65
      },
      effect: {
        Effect1Amount: '-0.2',
        Effect2Amount: '1',
        Effect3Amount: '2',
        Effect4Amount: '-0.3',
        Effect5Amount: '1.5'
      },
      depth: 3
    },
    '3026': {
      name: '수호 천사',
      description:
        '<stats>공격력 +45<br>방어력 +40</stats><br><br><unique>고유 지속 효과:</unique> 치명적인 피해를 입으면 4초 동안 경직에 걸린 다음 기본 체력의 50%, 최대 마나의 30%를 회복합니다. (재사용 대기시간 300초)',
      colloq: ';가엔;ga;guardian;angel',
      plaintext: '주기적으로 챔피언 사망 시 부활시켜 줍니다.',
      from: ['1038', '1031', '2420'],
      image: {
        full: '3026.png',
        sprite: 'item0.png',
        group: 'item',
        x: 48,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 50,
        purchasable: true,
        total: 2800,
        sell: 1120
      },
      tags: ['Armor', 'Damage'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 45,
        FlatArmorMod: 40
      },
      effect: {
        Effect1Amount: '0.5',
        Effect2Amount: '4',
        Effect3Amount: '300',
        Effect4Amount: '0.3'
      },
      depth: 3
    },
    '3027': {
      name: '영겁의 지팡이',
      description:
        '<stats>체력 +300<br><mana>마나 +300</mana><br>주문력 +60</stats><br><br><passive>기본 지속 효과:</passive> 매 중첩당 체력 +20, 마나 +10, 주문력 +4의 능력치를 올려줍니다. (최대 체력 +200, 마나 +100, 주문력 +40) 매 분당 중첩이 1 오릅니다. (최대 중첩 수 10)<br><unique>고유 지속 효과 - 영원:</unique> 챔피언으로부터 입은 피해의 15%를 마나로 돌려받습니다. 마나 소모 시 20%를 체력으로 돌려받습니다. (스킬 사용 1회당 최대 25까지)',
      colloq: ';로아;roa;rod;ages',
      plaintext: '체력, 마나, 주문력이 크게 증가합니다.',
      from: ['3010', '1026'],
      image: {
        full: '3027.png',
        sprite: 'item0.png',
        group: 'item',
        x: 96,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ['Health', 'HealthRegen', 'Mana', 'ManaRegen', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMPPoolMod: 300,
        FlatMagicDamageMod: 60
      },
      effect: {
        Effect1Amount: '20',
        Effect2Amount: '10',
        Effect3Amount: '4',
        Effect4Amount: '1',
        Effect5Amount: '10',
        Effect6Amount: '150',
        Effect7Amount: '200',
        Effect8Amount: '8',
        Effect9Amount: '25',
        Effect10Amount: '0.2',
        Effect11Amount: '0.15'
      },
      depth: 3
    },
    '3028': {
      name: '조화의 성배',
      description:
        '<stats>마법 저항력 +30<br><mana>기본 마나 재생 +50% </mana></stats><br><br><unique>고유 지속 효과 - 조화:</unique> 기본 마나 재생 %가 추가될 때마다 기본 체력 재생 %도 같은 수치만큼 추가됩니다.',
      colloq: ';chalice;harmony',
      plaintext: '마나 및 체력 재생이 증가합니다.',
      from: ['1004', '1033', '1004'],
      into: ['3174', '3222'],
      image: {
        full: '3028.png',
        sprite: 'item0.png',
        group: 'item',
        x: 144,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 100,
        purchasable: true,
        total: 800,
        sell: 560
      },
      tags: ['SpellBlock', 'HealthRegen', 'ManaRegen'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 30
      },
      effect: {
        Effect1Amount: '2',
        Effect2Amount: '5',
        Effect3Amount: '600',
        Effect4Amount: '180',
        Effect5Amount: '8',
        Effect6Amount: '1',
        Effect7Amount: '1'
      },
      depth: 2
    },
    '3029': {
      name: '영겁의 지팡이 (급속 충전)',
      description:
        '<stats>체력 +300<br><mana>마나 +300</mana><br>주문력 +60</stats><br><br><passive>기본 지속 효과:</passive> 매 중첩 당 체력 +20, 마나 +10, 주문력 +4의 능력치를 올려줍니다. (최대 체력 +200, 마나 +100, 주문력 +40) 매 40초 당 중첩이 1 오릅니다. (최대 중첩 수 10)<br><unique>고유 지속 효과 - 영원:</unique> 챔피언으로부터 입은 피해의 15%를 마나로 돌려받습니다. 마나 소모 시 20%를 체력으로 돌려받습니다. (스킬 사용 1회당 최대 25까지)',
      colloq: ';roa;로아;rod;ages',
      plaintext: '체력, 마나, 주문력이 크게 증가합니다.',
      from: ['3010', '1026'],
      image: {
        full: '3029.png',
        sprite: 'item0.png',
        group: 'item',
        x: 192,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ['Health', 'HealthRegen', 'Mana', 'ManaRegen', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMPPoolMod: 300,
        FlatMagicDamageMod: 60
      },
      effect: {
        Effect1Amount: '20',
        Effect2Amount: '10',
        Effect3Amount: '4',
        Effect4Amount: '1',
        Effect5Amount: '10',
        Effect6Amount: '150',
        Effect7Amount: '200',
        Effect8Amount: '8',
        Effect9Amount: '25',
        Effect10Amount: '0.2',
        Effect11Amount: '0.15'
      },
      depth: 3
    },
    '3030': {
      name: '마법공학 GLP-800',
      description:
        "<stats>주문력 +80<br><mana>마나 +600</mana><br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 가속:</unique> 재사용 대기시간이 추가로 10% 감소합니다.<br><unique>고유 사용 효과 - 서리 탄환:</unique> 유닛에게 최초 적중 시 폭발하는 얼음 탄환을 무더기로 발사해 적중하는 모든 적에게 <scaleLevel>100~200</scaleLevel> (+ 주문력의 20%)의 마법 피해를 입힙니다. (재사용 대기시간은 40초이며 다른 <font color='#9999FF'><a href='itembolt'>마법공학</a></font> 아이템과 재사용 대기시간을 공유합니다.)<br><br>적중당한 적은 65% 둔화되며 둔화 효과는 2초에 걸쳐 사라집니다.",
      colloq: 'frost cannon;',
      plaintext: '사용하면 얼어붙은 탄환을 발사해 적을 둔화시킵니다.',
      from: ['3802', '3145'],
      image: {
        full: '3030.png',
        sprite: 'item0.png',
        group: 'item',
        x: 240,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 2800,
        sell: 1960
      },
      tags: ['SpellDamage', 'Mana', 'Active', 'CooldownReduction', 'Slow'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 600,
        FlatMagicDamageMod: 80
      },
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '0',
        Effect3Amount: '0',
        Effect4Amount: '2',
        Effect5Amount: '0.65',
        Effect6Amount: '100',
        Effect7Amount: '200',
        Effect8Amount: '0.2',
        Effect9Amount: '25',
        Effect10Amount: '0.2',
        Effect11Amount: '0.15',
        Effect12Amount: '40',
        Effect13Amount: '-0.1',
        Effect14Amount: '10',
        Effect15Amount: '-0.65'
      },
      depth: 3
    },
    '3031': {
      name: '무한의 대검',
      description:
        '<stats>공격력 +80<br>치명타 확률 +25%</stats><br><br><unique>고유 지속 효과:</unique> 치명타가 피해량의 200%가 아닌 225%를 가합니다.',
      colloq: ';인피;무대;ie;infinity;edge',
      plaintext: '치명타 확률이 대폭 증가합니다.',
      from: ['1038', '1037', '1018'],
      into: ['3371'],
      image: {
        full: '3031.png',
        sprite: 'item0.png',
        group: 'item',
        x: 288,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 425,
        purchasable: true,
        total: 3400,
        sell: 2380
      },
      tags: ['CriticalStrike', 'Damage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 80,
        FlatCritChanceMod: 0.25
      },
      effect: {
        Effect1Amount: '2.25'
      },
      depth: 2
    },
    '3033': {
      name: '필멸자의 운명',
      description:
        "<stats>공격력 +45</stats><br><br><unique>고유 지속 효과 - 최후의 속삭임:</unique> <a href='FlatArmorPen'>방어구 관통력</a> +25%<br><unique>고유 지속 효과 - 처형인:</unique> 물리 피해를 가하면 적 챔피언에게 5초 동안 <a href='GrievousWounds'>고통스러운 상처</a>를 남깁니다.",
      colloq: ';lw;grievous',
      plaintext: '체력 회복력과 방어력이 뛰어난 적에게 효과적입니다.',
      from: ['3035', '3123'],
      image: {
        full: '3033.png',
        sprite: 'item0.png',
        group: 'item',
        x: 336,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 550,
        purchasable: true,
        total: 2800,
        sell: 1960
      },
      tags: ['ArmorPenetration', 'Damage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 45
      },
      effect: {
        Effect1Amount: '5',
        Effect2Amount: '0.25'
      },
      depth: 3
    },
    '3035': {
      name: '최후의 속삭임',
      description:
        "<stats>공격력 +20</stats><br><br><unique>고유 지속 효과 - 최후의 속삭임:</unique> <a href='FlatArmorPen'>방어구 관통력</a> +20%",
      colloq: ';라위;lw;last;whisper',
      plaintext: '방어력이 뛰어난 적에게 효과적입니다.',
      from: ['1036', '1036'],
      into: ['3033', '3036'],
      image: {
        full: '3035.png',
        sprite: 'item0.png',
        group: 'item',
        x: 384,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 750,
        purchasable: true,
        total: 1450,
        sell: 1015
      },
      tags: ['ArmorPenetration', 'Damage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 20
      },
      effect: {
        Effect1Amount: '0.25',
        Effect2Amount: '0.35',
        Effect3Amount: '0.2'
      },
      depth: 2
    },
    '3036': {
      name: '도미닉 경의 인사',
      description:
        "<stats>공격력 +45</stats><br><br><unique>고유 지속 효과 - 최후의 속삭임:</unique> <a href='FlatArmorPen'>방어구 관통력</a> +35%",
      colloq: ';라위;lw',
      plaintext: '체력과 방어력이 뛰어난 적에게 효과적입니다.',
      from: ['3035', '1037'],
      image: {
        full: '3036.png',
        sprite: 'item0.png',
        group: 'item',
        x: 432,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 475,
        purchasable: true,
        total: 2800,
        sell: 1960
      },
      tags: ['Damage', 'ArmorPenetration'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 45
      },
      effect: {
        Effect1Amount: '0.35'
      },
      depth: 3
    },
    '3040': {
      name: '대천사의 포옹',
      description:
        '<stats>주문력 +50<br><mana>마나 +1400</mana><br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 가속:</unique> 재사용 대기시간이 추가로 10% 감소합니다.<br><mana><unique>고유 지속 효과 - 경탄:</unique> 최대 마나의 3%만큼 주문력이 오릅니다. 마나를 소모하면 소모량의 25%를 돌려받습니다.</mana><br><active>고유 사용 효과 - 마나 보호막:</active> 현재 마나의 15%를 소모하여 2초 동안 150 + 마나 소모량에 해당하는 피해를 흡수하는 보호막을 씌웁니다. (재사용 대기시간 120초)<br><br><groupLimit>여신의 눈물 계열 아이템 소지 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: ';seraph;embrace;se',
      plaintext: '',
      specialRecipe: 3003,
      inStore: false,
      image: {
        full: '3040.png',
        sprite: 'item0.png',
        group: 'item',
        x: 0,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 3200,
        purchasable: false,
        total: 3200,
        sell: 2240
      },
      tags: ['Active'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 1400,
        FlatMagicDamageMod: 50
      },
      effect: {
        Effect1Amount: '0.03',
        Effect2Amount: '0.15',
        Effect3Amount: '2',
        Effect4Amount: '150',
        Effect5Amount: '120',
        Effect6Amount: '0',
        Effect7Amount: '0.25',
        Effect8Amount: '-0.1'
      }
    },
    '3041': {
      name: '메자이의 영혼약탈자',
      description:
        '<stats>주문력 +20<br><mana>마나 +200</mana></stats><br><br><unique>고유 지속 효과 - 두려움:</unique> 영광 중첩 하나 당 주문력이 +5만큼 상승합니다. 10 중첩 이상일 때 이동 속도가 10% 상승합니다.<br><unique>고유 지속 효과 - 절체절명:</unique> 적 챔피언을 처치할 때마다 영광 중첩 4회, 어시스트를 올릴 때마다 영광 중첩 2회가 쌓이고 중첩은 최대 25회까지 쌓을 수 있습니다. 사망 시 중첩 10회가 사라집니다.',
      colloq: ';mejai;soulstealer',
      plaintext: '챔피언을 처치하거나 어시스트를 올릴 경우, 주문력이 오릅니다.',
      from: ['1082'],
      image: {
        full: '3041.png',
        sprite: 'item0.png',
        group: 'item',
        x: 48,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 1050,
        purchasable: true,
        total: 1400,
        sell: 980
      },
      tags: ['SpellDamage', 'Mana'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 200,
        FlatMagicDamageMod: 20
      },
      effect: {
        Effect1Amount: '5',
        Effect2Amount: '4',
        Effect3Amount: '2',
        Effect4Amount: '25',
        Effect5Amount: '0.5',
        Effect6Amount: '0.1',
        Effect7Amount: '10',
        Effect8Amount: '10'
      },
      depth: 2
    },
    '3042': {
      name: '무라마나',
      description:
        "<stats>공격력 +35<br><mana>마나 +1000</mana></stats><br><br><mana><unique>고유 지속 효과 - 경탄:</unique> 최대 마나의 2%만큼 공격력이 오릅니다. 마나를 사용하면 15%를 돌려받습니다.</mana><br><mana><unique>고유 지속 효과 - 충격:</unique> 단일 대상에 대한 스킬 혹은 기본 공격이 <font color='#FFFFFF'>챔피언</font>에게 적중 시 현재 마나의 3%를 소모하여, 소모한 마나의 두 배만큼 추가 물리 피해를 입힙니다.<br><br>이 효과는 마나가 최대치의 20% 이상 남아 있을 때만 활성화됩니다.</mana><br><br><groupLimit>여신의 눈물 계열 아이템 소지 개수는 1개로 제한됩니다.</groupLimit>",
      colloq: ';muramana',
      plaintext: '',
      specialRecipe: 3004,
      inStore: false,
      image: {
        full: '3042.png',
        sprite: 'item0.png',
        group: 'item',
        x: 96,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 2400,
        purchasable: false,
        total: 2400,
        sell: 1680
      },
      tags: ['OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 35,
        FlatMPPoolMod: 1000
      },
      effect: {
        Effect1Amount: '0.15'
      }
    },
    '3043': {
      name: '무라마나',
      description:
        "<stats>공격력 +35<br><mana>마나 +1000</mana></stats><br><br><mana><unique>고유 지속 효과 - 경탄:</unique> 최대 마나의 2%만큼 공격력이 오릅니다. 마나를 사용하면 15%를 돌려받습니다.</mana><br><mana><unique>고유 지속 효과 - 충격:</unique> 단일 대상에 대한 스킬 혹은 기본 공격이 <font color='#FFFFFF'>챔피언</font>에게 적중 시 현재 마나의 3%를 소모하여, 소모한 마나의 두 배만큼 추가 물리 피해를 입힙니다.<br><br>이 효과는 마나가 최대치의 20% 이상 남아 있을 때만 활성화됩니다.</mana><br><br><groupLimit>여신의 눈물 계열 아이템 소지 개수는 1개로 제한됩니다.</groupLimit>",
      colloq: '',
      plaintext: '',
      specialRecipe: 3008,
      inStore: false,
      image: {
        full: '3043.png',
        sprite: 'item0.png',
        group: 'item',
        x: 144,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 2400,
        purchasable: false,
        total: 2400,
        sell: 1680
      },
      tags: ['OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 35,
        FlatMPPoolMod: 1000
      },
      effect: {
        Effect1Amount: '0.15'
      }
    },
    '3044': {
      name: '탐식의 망치',
      description:
        '<stats>체력 +200<br>공격력 +15</stats><br><br><unique>고유 지속 효과 - 격분:</unique> 기본 공격 시 2초간 이동 속도가 20 상승합니다. 적을 처치하면 이동 속도가 60 상승합니다. 원거리 챔피언의 경우 이동 속도 상승 효과는 절반만 적용됩니다.',
      colloq: ';탐망;phage',
      plaintext: '적을 공격하거나 처치하면 이동 속도가 잠시 상승합니다.',
      from: ['1028', '1036'],
      into: ['3078', '3071'],
      image: {
        full: '3044.png',
        sprite: 'item0.png',
        group: 'item',
        x: 192,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 1250,
        sell: 875
      },
      tags: ['Damage', 'Health', 'NonbootsMovement', 'OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 15,
        FlatHPPoolMod: 200
      },
      effect: {
        Effect1Amount: '20',
        Effect2Amount: '2',
        Effect3Amount: '60'
      },
      depth: 2
    },
    '3046': {
      name: '유령 무희',
      description:
        '<stats>공격 속도 +30%<br>치명타 확률 +25%<br>이동 속도 +7%</stats><br><br><unique>고유 지속 효과 - 망령의 왈츠:</unique> 적 챔피언을 기본 공격하면 유령 상태가 되고 2초 동안 이동 속도가 7% 증가합니다.<br><unique>고유 지속 효과 - 생명선:</unique> 피해를 받아 체력이 30% 이하가 될 경우, 2초 동안 최대 240~600의 피해를 흡수하는 보호막을 생성합니다. (재사용 대기시간 90초)',
      colloq: ';팬댄;pd;phantom;dancer',
      plaintext:
        '적을 공격할 때 더 빠르게 움직이며 체력이 낮으면 보호막이 생성됩니다.',
      from: ['1042', '3086'],
      image: {
        full: '3046.png',
        sprite: 'item0.png',
        group: 'item',
        x: 240,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 900,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ['AttackSpeed', 'CriticalStrike', 'NonbootsMovement'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatCritChanceMod: 0.25,
        PercentMovementSpeedMod: 0.07,
        PercentAttackSpeedMod: 0.3
      },
      effect: {
        Effect1Amount: '0.24',
        Effect2Amount: '10',
        Effect3Amount: '550',
        Effect4Amount: '0.07',
        Effect5Amount: '0.3',
        Effect6Amount: '2.5',
        Effect7Amount: '90',
        Effect8Amount: '240',
        Effect9Amount: '600',
        Effect10Amount: '40',
        Effect11Amount: '5',
        Effect12Amount: '0.3',
        Effect13Amount: '0.7',
        Effect14Amount: '2',
        Effect15Amount: '300',
        Effect16Amount: '1',
        Effect17Amount: '0.4',
        Effect18Amount: '9'
      },
      depth: 3
    },
    '3047': {
      name: '닌자의 신발',
      description:
        '<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><stats>방어력 +20</stats><br><br><unique>고유 지속 효과:</unique> 기본 공격 피해량의 12%를 막아 줍니다.<br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45',
      colloq: ';닌탑;타비;ninja;tabi',
      plaintext:
        '이동 속도가 증가하고, 적에게 받는 기본 공격의 피해가 줄어듭니다.',
      from: ['1001', '1029'],
      image: {
        full: '3047.png',
        sprite: 'item0.png',
        group: 'item',
        x: 288,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ['Armor', 'Boots'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMovementSpeedMod: 45,
        FlatArmorMod: 20
      },
      effect: {
        Effect1Amount: '0.12'
      },
      depth: 2
    },
    '3048': {
      name: '대천사의 포옹',
      description:
        '<stats>주문력 +50<br><mana>마나 +1400</mana><br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 가속:</unique> 재사용 대기시간이 추가로 10% 감소합니다.<br><mana><unique>고유 지속 효과 - 경탄:</unique> 최대 마나의 3%만큼 주문력이 오릅니다. 마나를 소모하면 소모량의 25%를 돌려받습니다.</mana><br><active>고유 사용 효과 - 마나 보호막:</active> 현재 마나의 15%를 소모하여 2초 동안 150 + 마나 소모량에 해당하는 피해를 흡수하는 보호막을 씌웁니다. (재사용 대기시간 120초)<br><br><groupLimit>여신의 눈물 계열 아이템 소지 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: '',
      plaintext: '',
      specialRecipe: 3007,
      inStore: false,
      image: {
        full: '3048.png',
        sprite: 'item0.png',
        group: 'item',
        x: 336,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 3200,
        purchasable: false,
        total: 3200,
        sell: 2240
      },
      tags: ['Active'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 1400,
        FlatMagicDamageMod: 50
      },
      effect: {
        Effect1Amount: '0.03',
        Effect2Amount: '0.15',
        Effect3Amount: '2',
        Effect4Amount: '150',
        Effect5Amount: '120',
        Effect6Amount: '0',
        Effect7Amount: '0.25',
        Effect8Amount: '-0.1'
      }
    },
    '3050': {
      name: '지크의 융합',
      description:
        '<stats>방어력 +60<br>마법 저항력 +30<br><mana>마나 +250</mana><br>재사용 대기시간 감소 +10%</stats><br><mainText><active>고유 사용 효과 - 전도체:</active> 현재 전도체 효과가 없는 아군에게 결속됩니다.<br><unique>고유 지속 효과:</unique> 아군 근처에서 궁극기 사용 시 주변에 서리 폭풍을 일으켜 10초 동안 아군의 기본 공격에 불꽃을 피웁니다. 서리 폭풍 안에 있는 적은 20% 둔화되며 아군의 기본 공격에 맞은 적은 2초 동안 타오르며 30%의 추가 마법 피해를 입습니다. (재사용 대기시간 45초)<br><br><unlockedPassive>서리불꽃의 언약</unlockedPassive> 타오르는 적을 서리 폭풍으로 둔화시키면 3초 동안 40%의 둔화 효과가 적용되고 초당 40의 마법 피해를 입힙니다.</mainText><br><br><rules>(지크의 융합 결속은 한 번에 하나만 가능합니다.)</rules>',
      colloq: ';haroldandkumar',
      plaintext: '궁극기 사용 시 아군 한 명과 함께 추가 효과를 받습니다.',
      from: ['3105', '3024'],
      image: {
        full: '3050.png',
        sprite: 'item0.png',
        group: 'item',
        x: 384,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: true,
        total: 2250,
        sell: 1575
      },
      tags: [
        'SpellBlock',
        'Armor',
        'Mana',
        'Aura',
        'Active',
        'CooldownReduction'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 30,
        FlatMPPoolMod: 250,
        FlatArmorMod: 60
      },
      effect: {
        Effect1Amount: '-0.1',
        Effect2Amount: '20',
        Effect3Amount: '40',
        Effect4Amount: '0.3',
        Effect5Amount: '1000',
        Effect6Amount: '0.5',
        Effect7Amount: '10',
        Effect8Amount: '3',
        Effect9Amount: '45',
        Effect10Amount: '3',
        Effect11Amount: '2',
        Effect12Amount: '300',
        Effect13Amount: '40',
        Effect14Amount: '2',
        Effect15Amount: '0.5'
      },
      depth: 3
    },
    '3052': {
      name: '요림의 주먹',
      description:
        '<stats>공격력 +15<br>체력 +200</stats><br><br><unique>고유 지속 효과:</unique> 유닛을 처치하면 최대 체력이 5 오릅니다. 이 효과는 최대 20번까지 중첩됩니다.',
      colloq: ';enforcer',
      plaintext: '공격력을 올려주며 유닛 처치 시 체력이 중첩됩니다.',
      from: ['1036', '1028'],
      into: ['3022', '3053', '3748'],
      image: {
        full: '3052.png',
        sprite: 'item0.png',
        group: 'item',
        x: 432,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 1200,
        sell: 840
      },
      tags: ['Health', 'Damage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 15,
        FlatHPPoolMod: 200
      },
      effect: {
        Effect1Amount: '20',
        Effect2Amount: '5',
        Effect3Amount: '2',
        Effect4Amount: '100'
      },
      depth: 2
    },
    '3053': {
      name: '스테락의 도전',
      description:
        '<stats>체력 +450</stats><br><br><unique>고유 지속 효과 - 거인의 힘:</unique> 기본 공격력의 50%를 추가 공격력으로 얻습니다. <br><unique>고유 지속 효과 - 생명선:</unique> 5초 안에 400 ~ 1800 이상의 피해를 (레벨에 비례) 입으면 추가 체력의 75%에 해당하는 보호막이 생깁니다. 0.75초 후 보호막은 3초에 걸쳐 서서히 사라집니다. (재사용 대기시간 60초)<br><br><unlockedPassive>스테락의 분노:</unlockedPassive> <i>생명선</i> 효과가 발동되면 8초 동안 몸집과 힘이 커지고, 강인함이 +30% 증가합니다.',
      colloq: ';juggernaut;primal',
      plaintext: '대량의 피해를 보호막으로 막아줍니다.',
      from: ['3052', '1037', '1028'],
      image: {
        full: '3053.png',
        sprite: 'item0.png',
        group: 'item',
        x: 0,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 725,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ['Health', 'Damage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 450
      },
      effect: {
        Effect1Amount: '400',
        Effect2Amount: '0.5',
        Effect3Amount: '5',
        Effect4Amount: '0.75',
        Effect5Amount: '0',
        Effect6Amount: '8',
        Effect7Amount: '60',
        Effect8Amount: '3',
        Effect9Amount: '1800',
        Effect10Amount: '0.75',
        Effect11Amount: '0.3'
      },
      depth: 3
    },
    '3057': {
      name: '광휘의 검',
      description:
        '<stats><mana>마나 +250</mana><br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 주문 검:</unique> 스킬을 사용하고 나면 다음 기본 공격 적중 시 기본 공격력의 100%에 해당하는 추가 물리 피해를 입힙니다. (재사용 대기시간 1.5초)',
      colloq: ';sheen',
      plaintext: '스킬 공격 다음 공격에 추가 피해가 적용됩니다.',
      from: ['1027'],
      into: ['3078', '3100', '3025'],
      image: {
        full: '3057.png',
        sprite: 'item0.png',
        group: 'item',
        x: 48,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 700,
        purchasable: true,
        total: 1050,
        sell: 735
      },
      tags: ['Mana', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 250
      },
      effect: {
        Effect1Amount: '1.5',
        Effect2Amount: '1'
      },
      depth: 2
    },
    '3065': {
      name: '정령의 형상',
      description:
        '<stats>체력 +450<br>마법 저항력 +55<br>기본 체력 재생 +100% <br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과:</unique> 받는 모든 치유 효과가 30% 증가합니다.',
      colloq: ';비사지;sv;spirit;visage',
      plaintext: '체력이 오르며 치유 효과가 커집니다.',
      from: ['3211', '3067'],
      image: {
        full: '3065.png',
        sprite: 'item0.png',
        group: 'item',
        x: 96,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 800,
        purchasable: true,
        total: 2800,
        sell: 1960
      },
      tags: ['CooldownReduction', 'Health', 'HealthRegen', 'SpellBlock'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 450,
        FlatSpellBlockMod: 55
      },
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '0.3',
        Effect3Amount: '0.5'
      },
      depth: 3
    },
    '3067': {
      name: '점화석',
      description:
        '<stats>체력 +200  </stats><br><br><unique>고유 지속 효과:</unique> 재사용 대기시간 감소 +10%',
      colloq: ';kindlegem;gem',
      plaintext: '체력과 재사용 대기시간 감소량이 증가합니다.',
      from: ['1028'],
      into: ['3065', '3071', '3109', '3083', '3152', '3161', '4403'],
      image: {
        full: '3067.png',
        sprite: 'item0.png',
        group: 'item',
        x: 144,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 800,
        sell: 560
      },
      tags: ['CooldownReduction', 'Health'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 200
      },
      effect: {
        Effect1Amount: '-0.1'
      },
      depth: 2
    },
    '3068': {
      name: '태양불꽃 망토',
      description:
        '<stats>체력 +425<br>방어력 +60  </stats><br><br><unique>고유 지속 효과 - 불사르기:</unique> 주변 적을 불태워 초당 <scaleLevel>[26~43]</scaleLevel>의 마법 피해를 입힙니다. 12초에 한 번, 적에게 이동 방해 효과 사용 시 <scaleLevel>[26~43]</scaleLevel><scaleHealth>(+추가 체력의 4%)</scaleHealth>만큼 추가 마법 피해를 입히고 불의 파도가 발생해 주변에 추가 피해를 입힙니다. 불사르기 피해량은 미니언과 몬스터 상대로 50% 증가합니다.',
      colloq: ';선파;썬파;태불;sunfire;cape',
      plaintext: '주변 적에게 지속적으로 피해를 입힙니다.',
      from: ['1031', '1028', '3751'],
      into: ['3373'],
      image: {
        full: '3068.png',
        sprite: 'item0.png',
        group: 'item',
        x: 192,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2750,
        sell: 1925
      },
      tags: ['Armor', 'Health'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 425,
        FlatArmorMod: 60
      },
      effect: {
        Effect1Amount: '26',
        Effect2Amount: '43',
        Effect3Amount: '0.5',
        Effect4Amount: '12',
        Effect5Amount: '0.04'
      },
      depth: 3
    },
    '3070': {
      name: '여신의 눈물',
      description:
        '<stats><mana>마나 +250</mana></stats><br><br><mana><unique>고유 지속 효과 - 경탄:</unique> 마나를 사용하면 10%를 돌려받습니다.<br><unique>고유 지속 효과 - 마나 충전:</unique> 마나를 소모할 때마다 최대 마나량이 4 증가합니다. (12초당 최대 3번 발동)<br><br>마나는 최대 +750까지 증가합니다.</mana><br><br><groupLimit>여신의 눈물 계열 아이템 소지 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: ';여눈;tear;goddess',
      plaintext: '마나를 소모하면 최대 마나량이 증가합니다.',
      from: ['1027', '1004'],
      into: ['3003', '3004'],
      image: {
        full: '3070.png',
        sprite: 'item0.png',
        group: 'item',
        x: 240,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 375,
        purchasable: true,
        total: 850,
        sell: 595
      },
      tags: ['Mana', 'ManaRegen'],
      maps: {
        '11': true,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 250
      },
      effect: {
        Effect1Amount: '4',
        Effect2Amount: '8',
        Effect3Amount: '1',
        Effect4Amount: '8',
        Effect5Amount: '750',
        Effect6Amount: '2',
        Effect7Amount: '0.1',
        Effect8Amount: '3',
        Effect9Amount: '12'
      },
      depth: 2
    },
    '3071': {
      name: '칠흑의 양날 도끼',
      description:
        '<stats>체력 +400<br>공격력 +40<br>재사용 대기시간 감소 +20%</stats><br><br><unique>고유 지속 효과:</unique> 적 챔피언에게 물리 피해를 입히면 대상을 베어, 6초 동안 방어력을 4% 감소시킵니다. (최대 6번, 24%까지 중첩)<br><unique>고유 지속 효과 - 격분:</unique> 물리 피해를 입히면 2초 동안 이동 속도가 20 상승합니다. 베어낸 적 챔피언의 처치를 돕거나 어떤 유닛이든 처치하면 대신 2초 동안 이동 속도가 60 상승합니다. 원거리 챔피언은 이 이동 속도의 절반만 상승합니다.',
      colloq: ';블클;bc;black;cleaver',
      plaintext: '적 챔피언에게 물리 피해를 입히면 적의 방어력이 감소합니다.',
      from: ['3044', '3067'],
      into: ['3380'],
      image: {
        full: '3071.png',
        sprite: 'item0.png',
        group: 'item',
        x: 288,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 950,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: [
        'ArmorPenetration',
        'CooldownReduction',
        'Damage',
        'Health',
        'NonbootsMovement',
        'OnHit'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 40,
        FlatHPPoolMod: 400
      },
      effect: {
        Effect1Amount: '-0.2',
        Effect2Amount: '0.04',
        Effect3Amount: '6',
        Effect4Amount: '6',
        Effect5Amount: '0.24',
        Effect6Amount: '20',
        Effect7Amount: '2',
        Effect8Amount: '60',
        Effect9Amount: '2',
        Effect10Amount: '0.01'
      },
      depth: 3
    },
    '3072': {
      name: '피바라기',
      description:
        '<stats>공격력 +80</stats><br><br><unique>고유 지속 효과:</unique> 생명력 흡수 +20%<br><unique>고유 지속 효과:</unique> 기본 공격을 통한 회복이 최대 체력 이상으로 가능합니다. 초과된 생명력은 보호막으로 전환되어 챔피언 레벨에 따라 50-350의 피해량을 막아줍니다.<br><br>이 보호막은 25초간 피해를 입히거나 받지 않으면 서서히 줄어듭니다.',
      colloq: ';블서;블써;bt;bloodthirster',
      plaintext:
        '공격력 및 생명력 흡수가 증가하며, 생명력 흡수가 최대 체력 이상으로 가능해집니다.',
      from: ['1038', '1036', '1053'],
      image: {
        full: '3072.png',
        sprite: 'item0.png',
        group: 'item',
        x: 336,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 950,
        purchasable: true,
        total: 3500,
        sell: 2450
      },
      tags: ['Damage', 'LifeSteal'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 80
      },
      effect: {
        Effect1Amount: '50',
        Effect2Amount: '350',
        Effect3Amount: '25',
        Effect4Amount: '0.2'
      },
      depth: 3
    },
    '3073': {
      name: '여신의 눈물 (급속 충전)',
      description:
        '<stats><mana>마나 +250</mana></stats><br><br><mana><unique>고유 지속 효과 - 경탄:</unique> 마나를 사용하면 10%를 돌려받습니다.<br><unique>고유 지속 효과 - 마나 충전:</unique> 마나를 소모할 때마다 최대 마나량이 6 증가합니다. (12초당 최대 3번 발동)<br><br>마나는 최대 +750까지 증가합니다.</mana>',
      colloq: ';tear;goddess',
      plaintext: '마나를 소모하면 최대 마나량이 증가합니다.',
      from: ['1027', '1004'],
      into: ['3007', '3008'],
      image: {
        full: '3073.png',
        sprite: 'item0.png',
        group: 'item',
        x: 384,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 375,
        purchasable: true,
        total: 850,
        sell: 595
      },
      tags: ['Mana', 'ManaRegen'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 250
      },
      effect: {
        Effect1Amount: '6',
        Effect2Amount: '8',
        Effect3Amount: '1',
        Effect4Amount: '8',
        Effect5Amount: '750',
        Effect6Amount: '2',
        Effect7Amount: '0.1',
        Effect8Amount: '3',
        Effect9Amount: '12'
      },
      depth: 2
    },
    '3074': {
      name: '굶주린 히드라',
      description:
        '<stats>공격력 +80<br>기본 체력 재생 +100% <br>생명력 흡수 +18%</stats><br><br><passive>기본 지속 효과:</passive> 이 아이템으로 가하는 피해에는 총 생명력 흡수의 50%가 적용됩니다.<br><unique>고유 지속 효과 - 베기:</unique> 기본 공격 적중 시 대상 주위의 적들에게 총 공격력의 20%~60%에 해당하는 추가 물리 피해를 입힙니다. (중앙에서 가장 가까운 적에게 가장 큰 피해)<br><active>고유 사용 효과 - 초승달:</active> 주위에 있는 적 유닛에게 총 공격력의 60%~100%에 해당하는 물리 피해를 입힙니다. (중앙에서 가장 가까운 적에게 가장 큰 피해) (재사용 대기시간 10초)',
      colloq: ';ravenous;hydra',
      plaintext: '근접 공격으로 주변의 적에게 피해를 주면 체력이 회복됩니다. ',
      from: ['3077', '1053', '1037'],
      image: {
        full: '3074.png',
        sprite: 'item0.png',
        group: 'item',
        x: 432,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 3500,
        sell: 2450
      },
      tags: ['Active', 'Damage', 'HealthRegen', 'LifeSteal', 'OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 80,
        PercentLifeStealMod: 0.18
      },
      effect: {
        Effect1Amount: '0.2',
        Effect2Amount: '0.6',
        Effect3Amount: '0.6',
        Effect4Amount: '1',
        Effect5Amount: '10',
        Effect6Amount: '350',
        Effect7Amount: '0.5',
        Effect8Amount: '450'
      },
      depth: 3
    },
    '3075': {
      name: '가시 갑옷',
      description:
        "<stats>체력 +250<br>방어력 +80</stats><br><br><unique>고유 지속 효과 - 가시:</unique> 기본 공격에 맞을 경우, 추가 방어력의 10% +25에 해당하는 마법 피해를 적에게 되돌려주고 3초 동안 <a href='GrievousWounds'>고통스러운 상처</a>효과를 남깁니다.<br><unique>고유 지속 효과 - 차가운 강철:</unique>  기본 공격에 맞으면, 공격한 챔피언의 공격 속도가 1초간 15% 감소합니다.",
      colloq: ';grievous',
      plaintext: '기본 공격으로 입은 피해를 마법 피해로 돌려줍니다.',
      from: ['3076', '1028', '3082'],
      image: {
        full: '3075.png',
        sprite: 'item1.png',
        group: 'item',
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ['Health', 'Armor', 'Slow'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 250,
        FlatArmorMod: 80
      },
      effect: {
        Effect1Amount: '25',
        Effect2Amount: '3',
        Effect3Amount: '3',
        Effect4Amount: '1',
        Effect5Amount: '0.15',
        Effect6Amount: '0.1',
        Effect7Amount: '0.1'
      },
      depth: 3
    },
    '3076': {
      name: '덤불 조끼',
      description:
        "<stats>방어력 +35</stats><br><br><unique>고유 지속 효과 - 가시:</unique> 기본 공격에 맞을 경우, 3 +추가 방어력의 10%에 해당하는 마법 피해를 적에게 되돌려주고 3초 동안 <a href='GrievousWounds'>고통스러운 상처</a>효과를 남깁니다.",
      colloq: ';grievous',
      plaintext: '적이 생명력 흡수 스킬을 사용할 때 유용합니다.',
      from: ['1029', '1029'],
      into: ['3075'],
      image: {
        full: '3076.png',
        sprite: 'item1.png',
        group: 'item',
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: ['Armor'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatArmorMod: 35
      },
      effect: {
        Effect1Amount: '0.1',
        Effect2Amount: '3',
        Effect3Amount: '3'
      },
      depth: 2
    },
    '3077': {
      name: '티아맷',
      description:
        '<stats>공격력 +25<br>기본 체력 재생 +50% </stats><br><br><unique>고유 지속 효과 - 베기:</unique> 기본 공격 적중 시 대상 주위의 적들에게 총 공격력의 20%~60%에 해당하는 추가 물리 피해를 입힙니다. (중앙에서 가장 가까운 적에게 가장 큰 피해)<br><active>고유 사용 효과 - 초승달:</active> 주위에 있는 적 유닛에게 총 공격력의 60%~100%에 해당하는 물리 피해를 입힙니다. (중앙에서 가장 가까운 적에게 가장 큰 피해) (재사용 대기시간 10초)',
      colloq: ';tiamat',
      plaintext: '주변 적에게 근접 피해를 입힙니다.',
      from: ['1036', '1006', '1036'],
      into: ['3074', '3748'],
      image: {
        full: '3077.png',
        sprite: 'item1.png',
        group: 'item',
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 475,
        purchasable: true,
        total: 1325,
        sell: 928
      },
      tags: ['HealthRegen', 'Damage', 'Active'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 25
      },
      effect: {
        Effect1Amount: '0.2',
        Effect2Amount: '0.6',
        Effect3Amount: '0.6',
        Effect4Amount: '1',
        Effect5Amount: '10'
      },
      depth: 2
    },
    '3078': {
      name: '삼위일체',
      description:
        '<stats>체력 +250<br><mana>마나 +250</mana><br>공격력 +25<br>공격 속도 +40%<br>재사용 대기시간 감소 +20%<br>이동 속도 +5%</stats><br><br><unique>고유 지속 효과 - 격분:</unique> 기본 공격 시 2초간 이동 속도가 20 상승합니다. 적을 처치하면 이동 속도가 60 상승합니다. 원거리 챔피언의 경우 이동 속도 상승 효과는 절반만 적용됩니다.<br><unique>고유 지속 효과 - 주문 검:</unique> 스킬을 사용하고 나면 다음 기본 공격 적중 시 기본 공격력의 200%에 해당하는 추가 물리 피해를 입힙니다. (재사용 대기시간 1.5초)',
      colloq: ';트포;triforce;tons of damage;trinity',
      plaintext: "취급주의: 이 아이템만 갖추면 '엄청난 피해'를 줄 수 있죠...",
      from: ['3101', '3057', '3044'],
      into: ['3384'],
      image: {
        full: '3078.png',
        sprite: 'item1.png',
        group: 'item',
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 333,
        purchasable: true,
        total: 3733,
        sell: 2613
      },
      tags: [
        'Health',
        'Damage',
        'AttackSpeed',
        'Mana',
        'CooldownReduction',
        'OnHit',
        'NonbootsMovement'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 25,
        PercentMovementSpeedMod: 0.05,
        FlatHPPoolMod: 250,
        FlatMPPoolMod: 250,
        PercentAttackSpeedMod: 0.4
      },
      effect: {
        Effect1Amount: '20',
        Effect2Amount: '60',
        Effect3Amount: '2',
        Effect4Amount: '2',
        Effect5Amount: '1.5'
      },
      depth: 3
    },
    '3082': {
      name: '파수꾼의 갑옷',
      description:
        '<stats>방어력 +40</stats><br><br><unique>고유 지속 효과 - 차가운 강철:</unique> 기본 공격에 맞으면, 1초간 공격한 챔피언의 공격 속도가 15% 감소합니다.',
      colloq: ';warden;mail',
      plaintext:
        '기본 공격에 적중당하면 공격한 적 챔피언의 공격 속도를 감소시킵니다.',
      from: ['1029', '1029'],
      into: ['3110', '3143', '3075'],
      image: {
        full: '3082.png',
        sprite: 'item1.png',
        group: 'item',
        x: 192,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: ['Armor', 'Slow'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatArmorMod: 40
      },
      effect: {
        Effect1Amount: '-0.15',
        Effect2Amount: '1'
      },
      depth: 2
    },
    '3083': {
      name: '워모그의 갑옷',
      description:
        '<stats>체력 +800<br>기본 체력 재생 +200% </stats><br><br><unique>고유 지속 효과:</unique> 재사용 대기시간 감소 +10%<br><unique>고유 지속 효과:</unique> 최대 체력이 3000에 도달하면 <unlockedPassive>워모그의 심장</unlockedPassive> 효과가 적용됩니다.<br><br><unlockedPassive>워모그의 심장:</unlockedPassive> 6초 동안 피해를 입지 않으면 매 5초당 최대 체력의 25%가 회복됩니다. (미니언 및 몬스터가 가하는 피해는 3초 동안 입지 않으면 체력이 회복됩니다.)',
      colloq: ';warmog;armor',
      plaintext: '체력과 체력 재생량이 대폭 상승합니다.',
      from: ['1011', '3067', '3801'],
      image: {
        full: '3083.png',
        sprite: 'item1.png',
        group: 'item',
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 2850,
        sell: 1995
      },
      tags: ['Health', 'HealthRegen', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 800
      },
      effect: {
        Effect1Amount: '0.015',
        Effect2Amount: '5',
        Effect3Amount: '0.25',
        Effect4Amount: '2999',
        Effect5Amount: '6',
        Effect6Amount: '-0.1',
        Effect7Amount: '6',
        Effect8Amount: '3',
        Effect9Amount: '3000'
      },
      depth: 3
    },
    '3084': {
      name: '지배자의 피갑옷',
      description:
        '<stats>체력 +800<br>기본 체력 재생 +100% </stats><br><br><unique>고유 지속 효과:</unique> 챔피언을 처치하거나 어시스트를 올리면 5초에 걸쳐 체력이 300 회복됩니다.',
      colloq: ';overlord;bloodmail',
      plaintext: '적을 처치하거나 어시스트를 올리면 체력이 회복됩니다.',
      from: ['1011', '3801'],
      image: {
        full: '3084.png',
        sprite: 'item1.png',
        group: 'item',
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 900,
        purchasable: true,
        total: 2550,
        sell: 1785
      },
      tags: ['Health', 'HealthRegen'],
      maps: {
        '11': false,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 800
      },
      effect: {
        Effect1Amount: '300',
        Effect2Amount: '5'
      },
      depth: 3
    },
    '3085': {
      name: '루난의 허리케인',
      description:
        '<stats>공격 속도 +40%<br>치명타 확률 +25%<br>이동 속도 +9%</stats><br><br><unique>고유 지속 효과 - 바람의 분노:</unique> 기본 공격 시 대상 주변 최대 2명의 적에게 작은 탄환을 발사하여, 각각 공격력의 40%에 해당하는 물리 피해를 입힙니다. 이 탄환에는 치명타 및 적중 시 효과가 적용됩니다.',
      colloq: ';runaan;hurricane',
      plaintext: '원거리 공격 시 주변의 적들에게 두 발의 탄환을 발사합니다.',
      from: ['1042', '3086', '1042'],
      image: {
        full: '3085.png',
        sprite: 'item1.png',
        group: 'item',
        x: 336,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ['CriticalStrike', 'AttackSpeed', 'OnHit', 'NonbootsMovement'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatCritChanceMod: 0.25,
        PercentMovementSpeedMod: 0.09,
        PercentAttackSpeedMod: 0.4
      },
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '40',
        Effect3Amount: '2',
        Effect4Amount: '0',
        Effect5Amount: '40',
        Effect6Amount: '1'
      },
      depth: 3
    },
    '3086': {
      name: '열정의 검',
      description:
        '<stats>공격 속도 +12%<br>치명타 확률 +25%</stats><br><br><unique>고유 지속 효과:</unique> 이동 속도 +7%',
      colloq: ';zeal',
      plaintext: '치명타 확률, 이동 속도와 공격 속도가 약간 상승합니다.',
      from: ['1018', '1042'],
      into: ['3085', '3094', '3046', '3087', '4403'],
      image: {
        full: '3086.png',
        sprite: 'item1.png',
        group: 'item',
        x: 384,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 1400,
        sell: 980
      },
      tags: ['AttackSpeed', 'CriticalStrike', 'NonbootsMovement'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatCritChanceMod: 0.25,
        PercentAttackSpeedMod: 0.12
      },
      effect: {
        Effect1Amount: '0.07'
      },
      depth: 2
    },
    '3087': {
      name: '스태틱의 단검',
      description:
        "<stats>공격 속도 +40%<br>치명타 확률 +25%<br>이동 속도 +7%</stats><br><br><unique>고유 지속 효과 - 충전 상태:</unique> 이동하거나 공격하면 <a href='Energized'>충전 상태</a>가 됩니다. <br><unique>고유 지속 효과 - 전기 충격:</unique> 충전 상태로 공격 시 <magicDamage>120의 추가 마법 피해</magicDamage>를 입힙니다. 충전 효과는 7명의 대상에게 연쇄 적용됩니다.",
      colloq: ';statikk;shiv',
      plaintext: '이동 시 점차 충전되어, 기본 공격 시 연쇄 번개를 발사합니다.',
      from: ['3086', '2015'],
      image: {
        full: '3087.png',
        sprite: 'item1.png',
        group: 'item',
        x: 432,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ['AttackSpeed', 'CriticalStrike', 'NonbootsMovement', 'OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatCritChanceMod: 0.25,
        PercentMovementSpeedMod: 0.07,
        PercentAttackSpeedMod: 0.4
      },
      effect: {
        Effect1Amount: '100',
        Effect2Amount: '80',
        Effect3Amount: '7',
        Effect4Amount: '750',
        Effect5Amount: '120',
        Effect6Amount: '120',
        Effect7Amount: '5'
      },
      depth: 3
    },
    '3089': {
      name: '라바돈의 죽음모자',
      description:
        '<stats>주문력 +120  </stats><br><br><unique>고유 지속 효과:</unique> 주문력이 40% 상승합니다.',
      colloq: ';데캡;데스캡;데쓰캡;dc;banksys;hat;rabadon',
      plaintext: '주문력이 대폭 상승합니다.',
      from: ['1058', '1058'],
      into: ['3374'],
      image: {
        full: '3089.png',
        sprite: 'item1.png',
        group: 'item',
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 1100,
        purchasable: true,
        total: 3600,
        sell: 2520
      },
      tags: ['SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 120
      },
      effect: {
        Effect1Amount: '40'
      },
      depth: 2
    },
    '3091': {
      name: '마법사의 최후',
      description:
        '<stats>공격 속도 +50%<br>마법 저항력 +50<br>이동 속도 +5%</stats><br><br><unique>고유 지속 효과 - 최후의 반격:</unique> 기본 공격 적중 시 대상에게 <scaleLevel>15~80</scaleLevel>의 마법 피해를 추가로 입힙니다. 체력이 절반 이하일 때 추가로 입힌 피해의 33%를 회복하며, 공격자가 근접 챔피언일 경우 최대 100%까지 회복합니다.',
      colloq: ';위치엔드;wit;end',
      plaintext: '마법 피해를 견디고 체력을 회복합니다.',
      from: ['1043', '1057', '1042'],
      image: {
        full: '3091.png',
        sprite: 'item1.png',
        group: 'item',
        x: 48,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 880,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ['SpellBlock', 'AttackSpeed', 'LifeSteal', 'NonbootsMovement'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        PercentMovementSpeedMod: 0.05,
        FlatSpellBlockMod: 50,
        PercentAttackSpeedMod: 0.5
      },
      effect: {
        Effect1Amount: '15',
        Effect2Amount: '80',
        Effect3Amount: '0.5',
        Effect4Amount: '0.33',
        Effect5Amount: '1',
        Effect6Amount: '10',
        Effect7Amount: '-8.75'
      },
      depth: 3
    },
    '3094': {
      name: '고속 연사포',
      description:
        "<stats>공격 속도 +30%<br>치명타 확률 +25%<br>이동 속도 +7%</stats><br><br><unique>고유 지속 효과 - 충전 상태:</unique> 이동하거나 공격하면 <a href='Energized'>충전 상태</a>가 됩니다. <br><unique>고유 지속 효과 - 저격수:</unique> 충전 상태로 공격 시 <magicDamage>120의 추가 마법 피해</magicDamage>를 입히며 사거리가 35% 증가합니다. (최대 사거리 +150)",
      colloq: ';고속;연사포',
      plaintext: '이동하며 완전히 충전하면 강력한 일격을 발사합니다.',
      from: ['3086', '2015'],
      image: {
        full: '3094.png',
        sprite: 'item1.png',
        group: 'item',
        x: 96,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ['AttackSpeed', 'CriticalStrike', 'NonbootsMovement', 'OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatCritChanceMod: 0.25,
        PercentMovementSpeedMod: 0.07,
        PercentAttackSpeedMod: 0.3
      },
      effect: {
        Effect1Amount: '0.35',
        Effect2Amount: '150',
        Effect3Amount: '120',
        Effect4Amount: '120',
        Effect5Amount: '5',
        Effect6Amount: '0.25'
      },
      depth: 3
    },
    '3095': {
      name: '폭풍갈퀴',
      description:
        "<stats>공격력 +50<br>치명타 확률 +25%<br>공격 속도 +15%</stats><br><br><unique>고유 지속 효과 - 충전 상태:</unique> 이동하거나 공격하면 <a href='Energized'>충전 상태</a>가 됩니다. <br><unique>고유 지속 효과 - 마비:</unique> 충전 상태로 공격 시 <magicDamage>120의 추가 마법 피해</magicDamage>를 입힙니다. 충전 효과로 0.5초 동안 75% 둔화됩니다.",
      colloq: ';바람검',
      plaintext: '다른 충전 효과를 크게 강화시킵니다.',
      from: ['1038', '1018', '2015'],
      image: {
        full: '3095.png',
        sprite: 'item1.png',
        group: 'item',
        x: 144,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ['Damage', 'CriticalStrike', 'AttackSpeed', 'OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 50,
        FlatCritChanceMod: 0.25,
        PercentAttackSpeedMod: 0.15
      },
      effect: {
        Effect1Amount: '120',
        Effect2Amount: '120',
        Effect3Amount: '5',
        Effect4Amount: '0.35',
        Effect5Amount: '0.75',
        Effect6Amount: '0.5'
      },
      depth: 3
    },
    '3100': {
      name: '리치베인',
      description:
        '<stats>주문력 +80<br>이동 속도 +7%<br>재사용 대기시간 감소 +10%<br><mana>마나 +250</mana></stats><br><br><unique>고유 지속 효과 - 주문 검:</unique> 스킬을 시전한 다음 기본 공격 적중 시 기본 공격력의 75% (+ 주문력의 50%)에 해당하는 추가 마법 피해를 입힙니다. (재사용 대기시간 1.5초)',
      colloq: ';lich;bane',
      plaintext: '스킬 공격 다음 공격에 추가 피해가 적용됩니다.',
      from: ['3057', '3113', '1026'],
      image: {
        full: '3100.png',
        sprite: 'item1.png',
        group: 'item',
        x: 192,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ['SpellDamage', 'Mana', 'CooldownReduction', 'NonbootsMovement'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        PercentMovementSpeedMod: 0.07,
        FlatMPPoolMod: 250,
        FlatMagicDamageMod: 80
      },
      effect: {
        Effect1Amount: '0.75',
        Effect2Amount: '0.5',
        Effect3Amount: '1.5'
      },
      depth: 3
    },
    '3101': {
      name: '쐐기검',
      description:
        '<stats>공격 속도 +35%</stats><br><br><unique>고유 지속 효과:</unique> 재사용 대기시간 감소 +10%',
      colloq: ';stinger',
      plaintext: '공격 속도와 재사용 대기시간 감소율이 증가합니다.',
      from: ['1042', '1042'],
      into: ['3115', '3137', '3078'],
      image: {
        full: '3101.png',
        sprite: 'item1.png',
        group: 'item',
        x: 240,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ['AttackSpeed', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        PercentAttackSpeedMod: 0.35
      },
      effect: {
        Effect1Amount: '10'
      },
      depth: 2
    },
    '3102': {
      name: '밴시의 장막',
      description:
        '<stats>주문력 +75<br>마법 저항력 +60<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 주문 방어막:</unique> 적의 다음번 스킬 공격을 막아주는 주문 보호막을 부여합니다. 이 보호막은 적 챔피언으로부터 40초 동안 공격받지 않으면 재생성됩니다.',
      colloq: ';bv;banshee;veil',
      plaintext: '주기적으로 적 스킬 공격을 막아줍니다.',
      from: ['3108', '1033', '1026'],
      image: {
        full: '3102.png',
        sprite: 'item1.png',
        group: 'item',
        x: 288,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 800,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: ['SpellBlock', 'SpellDamage', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 60,
        FlatMagicDamageMod: 75
      },
      effect: {
        Effect1Amount: '40',
        Effect2Amount: '45',
        Effect3Amount: '10',
        Effect4Amount: '-0.1',
        Effect5Amount: '8',
        Effect6Amount: '2'
      },
      depth: 3
    },
    '3105': {
      name: '군단의 방패',
      description: '<stats>방어력 +30<br>마법 저항력 +30</stats>',
      colloq: ';군방;aegis;legion',
      plaintext: '방어력과 마법 저항력이 증가합니다.',
      from: ['1033', '1029'],
      into: ['3190', '3005', '3050', '3812', '4403'],
      image: {
        full: '3105.png',
        sprite: 'item1.png',
        group: 'item',
        x: 336,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ['SpellBlock', 'Armor'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 30,
        FlatArmorMod: 30
      },
      depth: 2
    },
    '3107': {
      name: '구원',
      description:
        "<stats>체력 +200<br>기본 체력 재생 +50% <br><mana>기본 마나 재생 +150% </mana><br>재사용 대기시간 감소 +10%</stats><br><br><passive>고유 지속 효과:</passive> 보호막 및 체력 회복 +10%<br><active>고유 사용 효과:</active> 5500 거리 안의 위치를 지정합니다. 2.5초 후 빛을 한 줄기 불러와 아군의 체력을 10 (+ 대상 레벨당 20)만큼 회복시키고 적 챔피언에게 최대 체력의 10%에 해당하는 <font color='#FFFFFF'>고정</font> 피해를 입힙니다. 적 미니언에게는 250의 <font color='#FFFFFF'>고정</font> 피해를 입힙니다. (재사용 대기시간 120초) 구원의 체력 회복량은 보호막 및 체력 회복 효과를 3배로 적용받습니다.<br><br>죽은 상태로도 사용할 수 있습니다.<br><br><rules>(대상이 최근 다른 챔피언의 구원 효과를 받은 경우 효과가 반으로 감소합니다.)</rules>",
      colloq: ';구원;redemption;rndnjs',
      plaintext:
        '활성화하면 주변 지역의 아군을 회복시키고 적에게는 피해를 입힙니다.',
      from: ['3114', '3801'],
      into: ['3382'],
      image: {
        full: '3107.png',
        sprite: 'item1.png',
        group: 'item',
        x: 384,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2100,
        sell: 1470
      },
      tags: ['Health', 'HealthRegen', 'ManaRegen', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 200
      },
      effect: {
        Effect1Amount: '0.1',
        Effect2Amount: '10',
        Effect3Amount: '20',
        Effect4Amount: '0.1',
        Effect5Amount: '250',
        Effect6Amount: '120',
        Effect7Amount: '550',
        Effect8Amount: '5500',
        Effect9Amount: '0.5',
        Effect10Amount: '8',
        Effect11Amount: '3'
      },
      depth: 3
    },
    '3108': {
      name: '악마의 마법서',
      description:
        '<stats>주문력 +35</stats><br><br><unique>고유 지속 효과:</unique> 재사용 대기시간 감소 +10%',
      colloq: ';fiendish;codex',
      plaintext: '주문력과 재사용 대기시간 감소율이 증가합니다.',
      from: ['1052'],
      into: [
        '3174',
        '3115',
        '3157',
        '1402',
        '1414',
        '3128',
        '3102',
        '3905',
        '4104'
      ],
      image: {
        full: '3108.png',
        sprite: 'item1.png',
        group: 'item',
        x: 432,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 465,
        purchasable: true,
        total: 900,
        sell: 630
      },
      tags: ['CooldownReduction', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 35
      },
      effect: {
        Effect1Amount: '-0.1'
      },
      depth: 2
    },
    '3109': {
      name: '기사의 맹세',
      description:
        "<stats>체력 +250<br>방어력 +40<br>재사용 대기시간 감소 +10%</stats><br><br><active>고유 사용 효과:</active> 아군 챔피언을 <a href='KnightsVowPartner'>동료</a>로 지정합니다. (재사용 대기시간 90초)<br><passive>고유 지속 효과:</passive> <a href='KnightsVowPartner'>동료</a>가 근처에 있으면 방어력이 추가로 +20 상승하고 해당 챔피언에게 가까이 갈 때 이동 속도가 +15% 빨라집니다.<br><passive>고유 지속 효과:</passive> <a href='KnightsVowPartner'>동료</a>가 근처에 있으면 <a href='KnightsVowPartner'>동료</a>가 적 챔피언에게 입힌 피해의 12%만큼 체력을 회복하고, <a href='KnightsVowPartner'>동료</a>가 적 챔피언으로부터 입는 피해의 12%를 <font color='#FFFFFF'>고정</font> 피해로 대신 입습니다. (원거리 챔피언의 경우 체력 회복량과 대신 입는 피해량이 50% 감소합니다.)<br><br><rules>(한 번에 한 명의 챔피언만 기사의 맹세로 연결될 수 있습니다.)</rules>",
      colloq: ';',
      plaintext: '동료를 지정해 서로를 보호합니다.',
      from: ['3067', '1031'],
      image: {
        full: '3109.png',
        sprite: 'item1.png',
        group: 'item',
        x: 0,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 2200,
        sell: 1540
      },
      tags: [
        'Health',
        'Armor',
        'Aura',
        'CooldownReduction',
        'NonbootsMovement'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 250,
        FlatArmorMod: 40
      },
      effect: {
        Effect1Amount: '20',
        Effect2Amount: '0.15',
        Effect3Amount: '0.12',
        Effect4Amount: '0.12',
        Effect5Amount: '90',
        Effect6Amount: '0.5',
        Effect7Amount: '1000'
      },
      depth: 3
    },
    '3110': {
      name: '얼어붙은 심장',
      description:
        '<stats>방어력 +110<br>재사용 대기시간 감소 +20%<br><mana>마나 +400</mana></stats><br><br><aura>고유 오오라:</aura> 주변 적의 공격 속도를 15% 감소시킵니다.',
      colloq: ';얼심;프하;frozen;heart',
      plaintext: '방어력이 대폭 증가하고, 적의 기본 공격이 느려집니다.',
      from: ['3082', '3024'],
      image: {
        full: '3110.png',
        sprite: 'item1.png',
        group: 'item',
        x: 48,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 800,
        purchasable: true,
        total: 2700,
        sell: 1890
      },
      tags: ['Armor', 'Aura', 'CooldownReduction', 'Mana'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 400,
        FlatArmorMod: 110
      },
      effect: {
        Effect1Amount: '-0.2',
        Effect2Amount: '-0.15'
      },
      depth: 3
    },
    '3111': {
      name: '헤르메스의 발걸음',
      description:
        '<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><stats>마법 저항력 +25</stats><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45<br><unique>고유 지속 효과 - 강인함:</unique> 기절, 둔화, 도발, 공포, 침묵, 실명, 변이 및 이동 불가 효과의 지속시간이 30% 감소합니다.',
      colloq: ';mercury;treads',
      plaintext: '이동 속도가 증가하고, 방해 효과의 지속시간이 줄어듭니다.',
      from: ['1001', '1033'],
      image: {
        full: '3111.png',
        sprite: 'item1.png',
        group: 'item',
        x: 96,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ['Boots', 'SpellBlock', 'Tenacity'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMovementSpeedMod: 45,
        FlatSpellBlockMod: 25
      },
      depth: 2
    },
    '3112': {
      name: '수호자의 보주',
      description:
        '<stats>체력 +150<br>주문력 +35<br><mana>5초당 마나 재생 +10</mana></stats><br><br><groupLimit>수호자 아이템은 1개만 소유할 수 있습니다.</groupLimit>',
      colloq: ';orb;winter',
      plaintext: '마법사에게 특화된 시작 아이템입니다.',
      image: {
        full: '3112.png',
        sprite: 'item1.png',
        group: 'item',
        x: 144,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 950,
        purchasable: true,
        total: 950,
        sell: 380
      },
      tags: ['Health', 'SpellDamage', 'ManaRegen', 'Lane'],
      maps: {
        '11': false,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 150,
        FlatMagicDamageMod: 35
      }
    },
    '3113': {
      name: '에테르 환영',
      description:
        '<stats>주문력 +30</stats><br><br><unique>고유 지속 효과:</unique> 이동 속도 +5%',
      colloq: ';aether;wisp',
      plaintext: '주문력과 이동 속도를 높여줍니다.',
      from: ['1052'],
      into: ['3100', '3504', '3673', '3905', '3907'],
      image: {
        full: '3113.png',
        sprite: 'item1.png',
        group: 'item',
        x: 192,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 415,
        purchasable: true,
        total: 850,
        sell: 595
      },
      tags: ['NonbootsMovement', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 30
      },
      effect: {
        Effect1Amount: '0.05'
      },
      depth: 2
    },
    '3114': {
      name: '금지된 우상',
      description:
        '<stats><mana>기본 마나 재생 +50% </mana></stats><br><br><unique>고유 지속 효과:</unique> 재사용 대기시간 감소 +10%<br><unique>고유 지속 효과:</unique> 회복 및 보호막 효과 +5%',
      colloq: ';forbidden;idol',
      plaintext:
        '회복 및 보호막 효과, 마나 재생량, 재사용 대기시간 감소량이 증가합니다.',
      from: ['1004', '1004'],
      into: ['2065', '3107', '3222', '3504'],
      image: {
        full: '3114.png',
        sprite: 'item1.png',
        group: 'item',
        x: 240,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 550,
        purchasable: true,
        total: 800,
        sell: 560
      },
      tags: ['CooldownReduction', 'ManaRegen'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '-0.1',
        Effect2Amount: '0.05'
      },
      depth: 2
    },
    '3115': {
      name: '내셔의 이빨',
      description:
        '<stats>공격 속도 +50%<br>주문력 +80</stats><br><br><unique>고유 지속 효과:</unique> 재사용 대기시간 감소 +20%<br><unique>고유 지속 효과:</unique> 기본 공격 적중 시 15 (+ 주문력의 15%)의 추가 마법 피해를 입힙니다.<br>',
      colloq: ';nashor;tooth',
      plaintext: '공격 속도, 주문력, 재사용 대기시간 감소율이 증가합니다.',
      from: ['3101', '3108'],
      image: {
        full: '3115.png',
        sprite: 'item1.png',
        group: 'item',
        x: 288,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 1000,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: ['AttackSpeed', 'CooldownReduction', 'OnHit', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 80,
        PercentAttackSpeedMod: 0.5
      },
      depth: 3
    },
    '3116': {
      name: '라일라이의 수정홀',
      description:
        '<stats>체력 +300<br>주문력 +90</stats><br><br><unique>고유 지속 효과:</unique> 스킬 또는 마법 피해를 입히면 1초 동안 적의 이동 속도가 20% 감소합니다.',
      colloq: ';rylai;crystal;scepter',
      plaintext: '스킬 및 마법 피해를 입히면 적이 둔화에 걸립니다.',
      from: ['1026', '1052', '1028'],
      image: {
        full: '3116.png',
        sprite: 'item1.png',
        group: 'item',
        x: 336,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 915,
        purchasable: true,
        total: 2600,
        sell: 1820
      },
      tags: ['Health', 'SpellDamage', 'Slow'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMagicDamageMod: 90
      },
      effect: {
        Effect1Amount: '-0.2',
        Effect2Amount: '-0.2',
        Effect3Amount: '-0.2',
        Effect4Amount: '1',
        Effect5Amount: '1',
        Effect6Amount: '1'
      },
      depth: 2
    },
    '3117': {
      name: '기동력의 장화',
      description:
        '<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +25. 5초 동안 전투에서 벗어나 있으면 이동 속도가 +115 상승합니다.',
      colloq: ';모빌;boots;mobility',
      plaintext: '전투에서 벗어나 있을 때는 이동 속도가 대폭 상승합니다.',
      from: ['1001'],
      image: {
        full: '3117.png',
        sprite: 'item1.png',
        group: 'item',
        x: 384,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 700,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: ['Boots'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMovementSpeedMod: 115
      },
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '0',
        Effect3Amount: '0',
        Effect4Amount: '0',
        Effect5Amount: '0',
        Effect6Amount: '0',
        Effect7Amount: '0',
        Effect8Amount: '25'
      },
      depth: 2
    },
    '3123': {
      name: '처형인의 대검',
      description:
        "<stats>공격력 +15</stats><br><br><unique>고유 지속 효과 - 처형인:</unique> 물리 피해를 가하면 적 챔피언에게 3초 동안 <a href='GrievousWounds'>고통스러운 상처</a>를 남깁니다.",
      colloq: ';grievous',
      plaintext: '회복력이 뛰어난 적에게 효과적입니다.',
      from: ['1036'],
      into: ['3033'],
      image: {
        full: '3123.png',
        sprite: 'item1.png',
        group: 'item',
        x: 432,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 800,
        sell: 560
      },
      tags: ['Damage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 15
      },
      effect: {
        Effect1Amount: '3'
      },
      depth: 2
    },
    '3124': {
      name: '구인수의 격노검',
      description:
        "<stats>공격력 +25<br>주문력 +25<br>공격 속도 +25%</stats><br><br><passive>기본 지속 효과: </passive>기본 공격 적중 시 대상에게 15의 마법 피해를 입힙니다.<br><unique>고유 지속 효과 - 최후의 속삭임:</unique> 15%의 <a href='FlatArmorPen'>방어구 관통력</a>을 얻습니다.<br><unique>고유 지속 효과 - 분해:</unique> 15%의 <a href='TotalMagicPen'>마법 관통력</a>을 얻습니다.<br><unique>고유 지속 효과:</unique> 기본 공격 시 5초 동안 공격 속도가 +8% 오릅니다. (6번까지 중첩됩니다.) 중첩이 최대치에 도달하면 <unlockedPassive>구인수의 격노</unlockedPassive> 효과를 얻습니다.<br><br><unlockedPassive>구인수의 격노:</unlockedPassive> 매 3번째 기본 공격마다 적중 시 효과가 두 번 적용됩니다.<br><br><rules><font color='#8c8c8c'>근접 챔피언의 경우 중첩이 반만 쌓인 상태로 공격하면 남은 격노검 중첩이 바로 쌓입니다.</font></rules>",
      colloq: ';guinsoo;rageblade',
      plaintext: '공격 속도, 방어구 관통력, 마법 관통력이 증가합니다.',
      from: ['1052', '1043', '1037'],
      image: {
        full: '3124.png',
        sprite: 'item1.png',
        group: 'item',
        x: 0,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 790,
        purchasable: true,
        total: 3100,
        sell: 2170
      },
      tags: [
        'Damage',
        'AttackSpeed',
        'SpellDamage',
        'OnHit',
        'MagicPenetration',
        'ArmorPenetration'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 25,
        FlatMagicDamageMod: 25,
        PercentAttackSpeedMod: 0.25
      },
      effect: {
        Effect1Amount: '0.08',
        Effect2Amount: '2.5',
        Effect3Amount: '2.5',
        Effect4Amount: '5',
        Effect5Amount: '6',
        Effect6Amount: '0.1',
        Effect7Amount: '0.1',
        Effect8Amount: '15',
        Effect9Amount: '1',
        Effect10Amount: '3',
        Effect11Amount: '0.15',
        Effect12Amount: '0',
        Effect13Amount: '3'
      },
      depth: 3
    },
    '3128': {
      name: '죽음불꽃 손아귀',
      description:
        '<stats>주문력 +120<br>재사용 대기시간 감소 +10%</stats><br><br><active>고유 사용 효과:</active> 대상 적 챔피언의 최대 체력의 15%에 해당하는 마법 피해를 입힌 다음, 4초간 해당 챔피언이 이후 받는 모든 마법 피해를 20% 증가시킵니다. (재사용 대기시간 90초)',
      colloq: ';데파;죽불;dfg;deathfire;grasp',
      plaintext: '사용하면 적 챔피언에게 가하는 모든 마법 피해량이 증가합니다.',
      from: ['1058', '3108'],
      image: {
        full: '3128.png',
        sprite: 'item1.png',
        group: 'item',
        x: 48,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 850,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: ['Active', 'CooldownReduction', 'SpellDamage'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 120
      },
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '0.15',
        Effect3Amount: '0.2'
      },
      depth: 3
    },
    '3131': {
      name: '신성의 검',
      description:
        "<stats>공격력 +25<br>공격 속도 +25%</stats><br><br><unique>고유 지속 효과:</unique> <a href='Lethality'>물리 관통력</a> +18<br><active>고유 사용 효과:</active> 3초간, 혹은 3번의 치명타 공격까지 공격 속도가 +100% 늘어나고, 치명타 확률이 100%가 됩니다. (재사용 대기시간 90초)",
      colloq: ';물리 관통력;lethality',
      plaintext: '사용하면 잠시 동안 치명타 확률이 100% 증가합니다.',
      from: ['3134', '1042', '1042'],
      image: {
        full: '3131.png',
        sprite: 'item1.png',
        group: 'item',
        x: 96,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 800,
        purchasable: true,
        total: 2500,
        sell: 1750
      },
      tags: [
        'Damage',
        'CriticalStrike',
        'AttackSpeed',
        'Active',
        'ArmorPenetration'
      ],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 25,
        PercentAttackSpeedMod: 0.25
      },
      effect: {
        Effect1Amount: '18',
        Effect2Amount: '1',
        Effect3Amount: '3',
        Effect4Amount: '3',
        Effect5Amount: '1',
        Effect6Amount: '90'
      },
      depth: 3
    },
    '3133': {
      name: '콜필드의 전투 망치',
      description:
        '<stats>공격력 +25</stats><br><br><unique>고유 지속 효과:</unique> 재사용 대기시간 감소 +10%',
      colloq: ';',
      plaintext: '공격력과 재사용 대기시간 감소율이 증가합니다.',
      stacks: 0,
      from: ['1036', '1036'],
      into: [
        '1400',
        '1412',
        '3812',
        '3142',
        '3147',
        '3156',
        '3508',
        '4102',
        '3671',
        '4402'
      ],
      image: {
        full: '3133.png',
        sprite: 'item1.png',
        group: 'item',
        x: 144,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ['Damage', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 25
      },
      effect: {
        Effect1Amount: '-0.1'
      },
      depth: 2
    },
    '3134': {
      name: '톱날 단검',
      description:
        "<stats>공격력 +30</stats><br><br><unique>고유 지속 효과:</unique> <a href='Lethality'>물리 관통력</a> +10<br>",
      colloq: ';물리관통력',
      plaintext: '공격력과 물리 관통력이 증가합니다.',
      stacks: 0,
      from: ['1036', '1036'],
      into: ['3142', '3179', '3814', '3131', '3147', '3181', '4004'],
      image: {
        full: '3134.png',
        sprite: 'item1.png',
        group: 'item',
        x: 192,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ['Damage', 'ArmorPenetration'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 30
      },
      effect: {
        Effect1Amount: '10'
      },
      depth: 2
    },
    '3135': {
      name: '공허의 지팡이',
      description:
        "<stats>주문력 +70</stats><br><br><unique>고유 지속 효과 - 분해:</unique> <a href='TotalMagicPen'>마법 관통력</a> +40%",
      colloq: ';보이드;void;staff',
      plaintext: '마법 피해량이 증가합니다.',
      from: ['1026', '1052'],
      image: {
        full: '3135.png',
        sprite: 'item1.png',
        group: 'item',
        x: 240,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 1365,
        purchasable: true,
        total: 2650,
        sell: 1855
      },
      tags: ['MagicPenetration', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 70
      },
      effect: {
        Effect1Amount: '0.4',
        Effect2Amount: '0',
        Effect3Amount: '0',
        Effect4Amount: '0',
        Effect5Amount: '0',
        Effect6Amount: '0',
        Effect7Amount: '0',
        Effect8Amount: '4'
      },
      depth: 2
    },
    '3136': {
      name: '기괴한 가면',
      description:
        '<stats>주문력 +35<br>체력 +200</stats><br><br><unique>고유 지속 효과 - 광기:</unique> 적 챔피언과 전투 시 매초 2%의 추가 피해를 입힙니다. (최대 10%)',
      colloq: ';mask;haunting;guise',
      plaintext: '마법 피해량이 증가합니다.',
      stacks: 0,
      from: ['1028', '1052'],
      into: ['3151'],
      image: {
        full: '3136.png',
        sprite: 'item1.png',
        group: 'item',
        x: 288,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 665,
        purchasable: true,
        total: 1500,
        sell: 1050
      },
      tags: ['Health', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 200,
        FlatMagicDamageMod: 35
      },
      effect: {
        Effect1Amount: '15',
        Effect2Amount: '15',
        Effect3Amount: '1',
        Effect4Amount: '3',
        Effect5Amount: '15',
        Effect6Amount: '33',
        Effect7Amount: '2',
        Effect8Amount: '10',
        Effect9Amount: '5'
      },
      depth: 2
    },
    '3137': {
      name: '광신도의 검',
      description:
        '<stats>공격 속도 +50%<br>마법 저항력 +45<br>재사용 대기시간 감소 +10%</stats><br><br><active>고유 사용 효과 - 수은:</active> 챔피언에 걸린 모든 해로운 효과를 제거하고, 근접 챔피언의 경우 1초 동안 이동 속도를 +50% 올려줍니다. (재사용 대기시간 90초)',
      colloq: ';dervish;blade',
      plaintext:
        '사용하면 모든 해로운 효과가 제거되며, 이동 속도가 대폭 증가합니다.',
      from: ['3140', '3101'],
      image: {
        full: '3137.png',
        sprite: 'item1.png',
        group: 'item',
        x: 336,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 2700,
        sell: 1890
      },
      tags: [
        'Active',
        'AttackSpeed',
        'CooldownReduction',
        'NonbootsMovement',
        'SpellBlock'
      ],
      maps: {
        '11': false,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 45,
        PercentAttackSpeedMod: 0.5
      },
      effect: {
        Effect1Amount: '0.5',
        Effect2Amount: '1',
        Effect3Amount: '90'
      },
      depth: 3
    },
    '3139': {
      name: '헤르메스의 시미터',
      description:
        '<stats>공격력 +50<br>마법 저항력 +35<br>생명력 흡수 +10%</stats><br><br><active>고유 사용 효과 - 수은:</active> 챔피언에 걸린 모든 군중 제어 효과를 제거하고, 1초 동안 이동 속도를 +50% 올려줍니다. (재사용 대기시간 90초)',
      colloq: ';mercurial;scimitar',
      plaintext:
        '사용하면 모든 군중 제어 효과가 제거되며, 이동 속도가 대폭 증가합니다.',
      from: ['3140', '1037', '1053'],
      image: {
        full: '3139.png',
        sprite: 'item1.png',
        group: 'item',
        x: 384,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 325,
        purchasable: true,
        total: 3400,
        sell: 2380
      },
      tags: ['SpellBlock', 'Damage', 'LifeSteal', 'Active', 'NonbootsMovement'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 50,
        FlatSpellBlockMod: 35,
        PercentLifeStealMod: 0.1
      },
      effect: {
        Effect1Amount: '0.5',
        Effect2Amount: '1',
        Effect3Amount: '90'
      },
      depth: 3
    },
    '3140': {
      name: '수은 장식띠',
      description:
        '<stats>마법 저항력 +30</stats><br><br><active>고유 사용 효과 - 수은:</active> 챔피언에게 걸린 모든 군중 제어 효과를 제거합니다. (재사용 대기시간 90초)',
      colloq: ';퀵실;qss;quicksilver;sash',
      plaintext: '사용하면 모든 군중 제어 효과가 제거됩니다.',
      from: ['1033'],
      into: ['3139', '3137'],
      image: {
        full: '3140.png',
        sprite: 'item1.png',
        group: 'item',
        x: 432,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 850,
        purchasable: true,
        total: 1300,
        sell: 910
      },
      tags: ['Active', 'SpellBlock'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 30
      },
      effect: {
        Effect1Amount: '90'
      },
      depth: 2
    },
    '3142': {
      name: '요우무의 유령검',
      description:
        "<stats>공격력 +55<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과:</unique> <a href='Lethality'>물리 관통력</a> +18<br><unique>고유 지속 효과:</unique> 전투에서 벗어나 있을 때 이동 속도 +40<br><active>고유 사용 효과:</active> 6초 동안 이동 속도가 +20% 증가하며 유닛을 통과할 수 있습니다. (재사용 대기시간 45초)",
      colloq: ';물리관통력',
      plaintext: '사용하면 이동 속도가 대폭 상승합니다.',
      from: ['3133', '3134'],
      into: ['3388'],
      image: {
        full: '3142.png',
        sprite: 'item1.png',
        group: 'item',
        x: 0,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 700,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: [
        'Damage',
        'Active',
        'CooldownReduction',
        'NonbootsMovement',
        'ArmorPenetration'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 55
      },
      effect: {
        Effect1Amount: '45',
        Effect2Amount: '18',
        Effect3Amount: '0.2',
        Effect4Amount: '0',
        Effect5Amount: '6',
        Effect6Amount: '40'
      },
      depth: 3
    },
    '3143': {
      name: '란두인의 예언',
      description:
        '<stats>체력 +400<br>방어력 +70</stats><br><br><unique>고유 지속 효과:</unique>기본 공격 치명타로 입는 피해량 -20%<br><unique>고유 지속 효과 - 차가운 강철:</unique>기본 공격에 맞으면 1초 동안 공격한 챔피언의 공격 속도가 15% 감소합니다.<br><active>고유 사용 효과:</active> 주변 적 유닛의 이동 속도를 2초 동안 55%만큼 둔화시킵니다. (재사용 대기시간 60초)',
      colloq: ';randuin;omen',
      plaintext:
        '방어력이 대폭 강화됩니다. 사용하면 주변 적들이 둔화에 걸립니다.',
      from: ['3082', '1011'],
      image: {
        full: '3143.png',
        sprite: 'item1.png',
        group: 'item',
        x: 48,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 900,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ['Active', 'Armor', 'Health', 'Slow'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 400,
        FlatArmorMod: 70
      },
      effect: {
        Effect1Amount: '2',
        Effect2Amount: '0.2',
        Effect3Amount: '-0.55',
        Effect4Amount: '1',
        Effect5Amount: '-0.15',
        Effect6Amount: '0.15',
        Effect7Amount: '0.3'
      },
      depth: 3
    },
    '3144': {
      name: '빌지워터 해적검',
      description:
        '<stats>공격력 +25<br>생명력 흡수 +10%</stats><br><br><active>고유 사용 효과:</active> 100의 마법 피해를 입히고 대상 챔피언에게 2초 동안 25%의 둔화 효과를 부여합니다. (재사용 대기시간 90초)',
      colloq: ';bilgewater;cutlass',
      plaintext: '사용하면 마법 피해를 가하고 적 챔피언을 둔화시킵니다.',
      from: ['1053', '1036'],
      into: ['3146', '3153'],
      image: {
        full: '3144.png',
        sprite: 'item1.png',
        group: 'item',
        x: 96,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 1600,
        sell: 1120
      },
      tags: ['Active', 'Damage', 'LifeSteal', 'Slow'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 25,
        PercentLifeStealMod: 0.1
      },
      effect: {
        Effect1Amount: '-0.25',
        Effect2Amount: '2',
        Effect3Amount: '90',
        Effect4Amount: '100'
      },
      depth: 3
    },
    '3145': {
      name: '마법공학 리볼버',
      description:
        "<stats>주문력 +40</stats><br><br><unique>고유 지속 효과 - 마법 탄환:</unique> 적 챔피언에게 기본 공격으로 피해를 입히면 추가로 <scaleLevel>50~125</scaleLevel>의 마법 피해도 입힙니다. (재사용 대기시간은 40초이며, 다른 <font color='#9999FF'><a href='itembolt'>마법공학</a></font> 아이템과 재사용 대기시간을 공유합니다.)<br><br>아이템 고유 사용 효과의 재사용 대기시간이 감소하면 마법 탄환의 재사용 대기시간도 감소합니다.<br><br><rules>(피해량은 레벨에 비례하며, 마법공학 효과는 다른 마법 아이템 효과를 발동시킬 수 있습니다.)</rules>",
      colloq: ';흡총;hextech;revolver',
      plaintext:
        '주문력이 상승합니다. 공격 시 주기적으로 추가 마법 피해를 입힙니다.',
      from: ['1052', '1052'],
      into: ['3146', '3152', '3030'],
      image: {
        full: '3145.png',
        sprite: 'item1.png',
        group: 'item',
        x: 144,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 180,
        purchasable: true,
        total: 1050,
        sell: 735
      },
      tags: ['SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 40
      },
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '50',
        Effect3Amount: '0',
        Effect4Amount: '125',
        Effect5Amount: '40'
      },
      depth: 2
    },
    '3146': {
      name: '마법공학 총검',
      description:
        "<stats>공격력 +40<br>주문력 +80</stats><br><br><unique>고유 지속 효과:</unique> 적에게 가한 피해량의 15%만큼 회복합니다. 이 효과는 범위 피해에는 33%만 적용됩니다.<br><active>고유 사용 효과 - 번개:</active> <scaleLevel>175~253</scaleLevel> (+ 주문력의 30%)의 마법 피해를 입히고 대상 챔피언을 2초 동안 40% 둔화시킵니다. (재사용 대기시간은 40초이며, 다른 <font color='#9999FF'><a href='itembolt'>마법공학</a></font> 아이템과 재사용 대기시간을 공유합니다.)",
      colloq: ';hextech;gunblade',
      plaintext:
        '공격력과 주문력이 증가합니다. 사용하면 대상이 둔화에 걸립니다.',
      from: ['3144', '3145'],
      image: {
        full: '3146.png',
        sprite: 'item1.png',
        group: 'item',
        x: 192,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 750,
        purchasable: true,
        total: 3400,
        sell: 2380
      },
      tags: [
        'Active',
        'Damage',
        'LifeSteal',
        'Slow',
        'SpellDamage',
        'SpellVamp'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 40,
        FlatMagicDamageMod: 80
      },
      effect: {
        Effect1Amount: '0.15',
        Effect2Amount: '40',
        Effect3Amount: '175',
        Effect4Amount: '253',
        Effect5Amount: '0.4',
        Effect6Amount: '2'
      },
      depth: 4
    },
    '3147': {
      name: '드락사르의 황혼검',
      description:
        "<stats>공격력 +60<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과</unique>: <a href='Lethality'>물리 관통력</a> +21<br><unique>고유 지속 효과 - 밤의 추적자:</unique> 1초 이상 눈에 띄지 않으면 적 챔피언에 대한 다음 기본 공격은 <scaleLevel>30~150</scaleLevel>의 추가 물리 피해를 입히고 0.25초 동안 99% 둔화시킵니다. 원거리 공격일 경우 대상을 둔화시키지 않습니다. (이 효과는 적 챔피언의 눈에 띈 후 5초간 지속됩니다.)",
      colloq: ';물리관통력',
      plaintext: '적에게 기습 공격 시 추가 물리 피해를 입힙니다.',
      from: ['3134', '3133'],
      image: {
        full: '3147.png',
        sprite: 'item1.png',
        group: 'item',
        x: 240,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 700,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ['Damage', 'CooldownReduction', 'OnHit', 'ArmorPenetration'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 60
      },
      effect: {
        Effect1Amount: '21',
        Effect2Amount: '0',
        Effect3Amount: '0',
        Effect4Amount: '0',
        Effect5Amount: '30',
        Effect6Amount: '150',
        Effect7Amount: '99',
        Effect8Amount: '0.25',
        Effect9Amount: '5',
        Effect10Amount: '30',
        Effect11Amount: '1',
        Effect12Amount: '150'
      },
      depth: 3
    },
    '3151': {
      name: '리안드리의 고통',
      description:
        "<stats>주문력 +75<br>체력 +300</stats><br><br><unique>고유 지속 효과 - 광기:</unique> 적 챔피언과 전투 시 매초 2%의 추가 피해를 입힙니다. (최대 10%)<br><unique>고유 지속 효과 - 고통:</unique> 스킬 공격에 맞은 적에게 3초에 걸쳐 매초 대상의 최대 체력의 1.5%에 해당하는 초당 추가 마법 피해를 입힙니다. 이 추가 피해량은 <a href='MovementImpaired'>이동 방해</a>에 걸린 유닛에게는 2.5%로 증가됩니다.",
      colloq: ';mask;liandry;lament',
      plaintext:
        '스킬 공격으로 피해를 입히면 적이 불에 타서 체력의 일정 비율을 잃습니다.',
      stacks: 0,
      from: ['3136', '1026'],
      image: {
        full: '3151.png',
        sprite: 'item1.png',
        group: 'item',
        x: 288,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 750,
        purchasable: true,
        total: 3100,
        sell: 2170
      },
      tags: ['Health', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMagicDamageMod: 75
      },
      effect: {
        Effect1Amount: '15',
        Effect2Amount: '0.015',
        Effect3Amount: '3',
        Effect4Amount: '100',
        Effect5Amount: '2',
        Effect6Amount: '10',
        Effect7Amount: '2',
        Effect8Amount: '2.5'
      },
      depth: 3
    },
    '3152': {
      name: '마법공학 초기형 벨트-01',
      description:
        "<stats>체력 +300<br>주문력 +60<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 사용 효과 - 화염 탄환:</unique> 앞으로 돌진해 <scaleLevel>75~150</scaleLevel> (+주문력의 25%)의 마법 피해를 입히는 화염 탄환을 방사형으로 발사합니다. (재사용 대기시간은 40초이며, 다른 <font color='#9999FF'><a href='itembolt'>마법공학</a></font> 아이템과 재사용 대기시간을 공유합니다.)<br><br>챔피언이나 몬스터가 화염 탄환을 여러 발 맞을 경우 추가되는 탄환 하나당 10%의 피해를 입습니다.<br><br><rules>(돌진으로 지형은 통과할 수 없습니다.)</rules>",
      colloq: 'rocket belt;',
      plaintext:
        '사용시 앞으로 돌진하며 강력한 폭발을 일으키는 탄환을 발사합니다.',
      from: ['3145', '3067'],
      image: {
        full: '3152.png',
        sprite: 'item1.png',
        group: 'item',
        x: 336,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2500,
        sell: 1750
      },
      tags: ['Health', 'SpellDamage', 'Active', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMagicDamageMod: 60
      },
      effect: {
        Effect1Amount: '0.12',
        Effect2Amount: '0.04',
        Effect3Amount: '40',
        Effect4Amount: '75',
        Effect5Amount: '150',
        Effect6Amount: '0.1',
        Effect7Amount: '0.25',
        Effect8Amount: '40',
        Effect9Amount: '0.5'
      },
      depth: 3
    },
    '3153': {
      name: '몰락한 왕의 검',
      description:
        '<stats>공격력 +40<br>공격 속도 +25%<br>생명력 흡수 +12%</stats><br><br><unique>고유 지속 효과:</unique> 기본 공격 적중 시 대상 현재 체력의 8%에 해당하는 추가 물리 피해를 입힙니다. (근접 챔피언은 12%)<br><active>고유 사용 효과:</active> 적 챔피언에게 100의 마법 피해를 입히고, 3초 동안 대상 이동 속도의 25%를 훔칩니다. (재사용 대기시간 90초)<br><br><rules>최소 15의 추가 물리 피해를 입힙니다.<br>몬스터 및 미니언에게 최대 60의 추가 물리 피해를 입힙니다.<br>사용자의 생명력 흡수가 입힌 추가 물리 피해에 적용됩니다.</rules>',
      colloq: ';몰왕;몰왕검;brk;bork;bork;bork;botrk;blade;ruined;king',
      plaintext:
        '상대의 체력에 비례하여 피해를 입히고, 상대의 이동 속도를 훔칠 수 있습니다.',
      from: ['3144', '1043'],
      into: ['3389'],
      image: {
        full: '3153.png',
        sprite: 'item1.png',
        group: 'item',
        x: 384,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 700,
        purchasable: true,
        total: 3300,
        sell: 2310
      },
      tags: [
        'Damage',
        'AttackSpeed',
        'LifeSteal',
        'Active',
        'Slow',
        'OnHit',
        'NonbootsMovement'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 40,
        PercentAttackSpeedMod: 0.25,
        PercentLifeStealMod: 0.12
      },
      effect: {
        Effect1Amount: '0.08',
        Effect2Amount: '0.12',
        Effect3Amount: '15',
        Effect4Amount: '60'
      },
      depth: 4
    },
    '3155': {
      name: '주문포식자',
      description:
        '<stats>공격력 +20<br>마법 저항력 +35</stats><br><br><unique>고유 지속 효과 - 생명선:</unique> 마법 피해를 받아 체력이 30% 이하가 될 경우,  110에서 280의 마법 피해(레벨에 비례)를 흡수하는 보호막을 5초 동안 생성합니다. (재사용 대기시간 90초)',
      colloq: ';hexdrinker',
      plaintext: '공격력과 마법 저항력이 증가합니다.',
      stacks: 0,
      from: ['1036', '1033'],
      into: ['3156'],
      image: {
        full: '3155.png',
        sprite: 'item1.png',
        group: 'item',
        x: 432,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 1300,
        sell: 910
      },
      tags: ['Damage', 'SpellBlock'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 20,
        FlatSpellBlockMod: 35
      },
      effect: {
        Effect1Amount: '0.3',
        Effect2Amount: '110',
        Effect3Amount: '5',
        Effect4Amount: '90',
        Effect5Amount: '280',
        Effect6Amount: '100',
        Effect7Amount: '10'
      },
      depth: 2
    },
    '3156': {
      name: '맬모셔스의 아귀',
      description:
        '<stats>공격력 +50<br>마법 저항력 +50<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 생명선:</unique> 마법 피해를 받아 체력이 30% 이하가 될 경우, 5초 동안 최대 350의 마법 피해를 흡수하는 보호막을 생성합니다. (재사용 대기시간 90초)<br><unlockedPassive>생명의 힘:</unlockedPassive> <i>생명선</i> 효과가 발동되면 전투에서 벗어날 때까지 주문 흡혈이 +10%, 생명력 흡수가 +10%, 공격력이 +20 증가합니다.',
      colloq: ';맬모셔스의아귀;malmortius;apfahtutm',
      plaintext: '체력이 낮아지면 추가 공격력이 부여됩니다.',
      stacks: 0,
      from: ['3155', '3133'],
      image: {
        full: '3156.png',
        sprite: 'item1.png',
        group: 'item',
        x: 0,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 850,
        purchasable: true,
        total: 3250,
        sell: 2275
      },
      tags: [
        'SpellBlock',
        'Damage',
        'LifeSteal',
        'CooldownReduction',
        'SpellVamp'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 50,
        FlatSpellBlockMod: 50
      },
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '35',
        Effect3Amount: '0.3',
        Effect4Amount: '350',
        Effect5Amount: '5',
        Effect6Amount: '90',
        Effect7Amount: '20',
        Effect8Amount: '0',
        Effect9Amount: '0.1',
        Effect10Amount: '0.1'
      },
      depth: 3
    },
    '3157': {
      name: '존야의 모래시계',
      description:
        '<stats>주문력 +75<br>방어력 +45<br>재사용 대기시간 감소 +10%</stats><br><br><active>고유 사용 효과 - 경직:</active> 챔피언이 2.5초 동안 아무런 행동도 취할 수 없는 대신 공격도 받지 않는 무적 상태가 됩니다. (재사용 대기시간 120초)',
      colloq: ';zhg;zonyas;hourglass',
      plaintext:
        '사용하면 아무런 행동도 취할 수 없는 대신 공격도 받지 않는 무적 상태가 됩니다.',
      from: ['3191', '3108', '2420'],
      into: ['3386'],
      image: {
        full: '3157.png',
        sprite: 'item1.png',
        group: 'item',
        x: 48,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ['Armor', 'SpellDamage', 'Active', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 75,
        FlatArmorMod: 45
      },
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '2.5',
        Effect3Amount: '120'
      },
      depth: 3
    },
    '3158': {
      name: '명석함의 아이오니아 장화',
      description:
        "<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><unique>고유 지속 효과:</unique> 재사용 대기시간 감소 +10%<br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45<br><unique>고유 지속 효과:</unique> 소환사 주문의 재사용 대기시간을 10%만큼 줄입니다.<br><br><br><rules><font color='#FDD017'>CLE 20년 12월 10일 남부 지방의 패권을 두고 벌어진 녹서스와의 재경합에서 아이오니아의 승리를 기념하는 헌정 아이템입니다.''</font></rules>",
      colloq: ';ionia;boots;lucidity',
      plaintext: '이동 속도와 재사용 대기시간 감소율이 증가합니다.',
      from: ['1001'],
      image: {
        full: '3158.png',
        sprite: 'item1.png',
        group: 'item',
        x: 96,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 900,
        sell: 630
      },
      tags: ['Boots', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMovementSpeedMod: 45
      },
      effect: {
        Effect1Amount: '-0.1',
        Effect2Amount: '0.1'
      },
      depth: 2
    },
    '3161': {
      name: '쇼진의 창',
      description:
        "<stats>공격력 +65<br>체력 +200<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과:</unique> <a href='FlatDamageReduction'>피해량 감소</a> 효과를 얻습니다. 챔피언의 기본 공격과 스킬로 입는 피해량이 10+추가 공격력의 15%만큼 감소합니다. (최대 300)<br><unique>고유 지속 효과:</unique> 근처에 적 챔피언이 3명 이상 있으면 기본 공격 시 <unlockedPassive>용의 심장</unlockedPassive> 효과를 얻습니다. (재사용 대기시간 90초)<br><br><unlockedPassive>용의 심장:</unlockedPassive> 8초 동안 300%의 추가 피해를 막아주며, 챔피언 처치에 관여하면 초기화됩니다.<br><br><rules></rules>",
      colloq: ';쇼진;shojin;tywls;tywlsdml',
      plaintext:
        '챔피언에게 받는 피해량이 고정된 수치만큼 감소합니다. 근처에 적 챔피언이 많을 때 공격하면 잠시 동안 이 수치가 증가합니다.',
      stacks: 0,
      from: ['1038', '3067'],
      image: {
        full: '3161.png',
        sprite: 'item1.png',
        group: 'item',
        x: 144,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 900,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: ['Health', 'Damage', 'CooldownReduction'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 65,
        FlatHPPoolMod: 200
      },
      effect: {
        Effect1Amount: '300',
        Effect2Amount: '0',
        Effect3Amount: '90',
        Effect4Amount: '0',
        Effect5Amount: '10',
        Effect6Amount: '0',
        Effect7Amount: '0.3',
        Effect8Amount: '0.15',
        Effect9Amount: '8',
        Effect10Amount: '3'
      },
      depth: 3
    },
    '3165': {
      name: '모렐로노미콘',
      description:
        "<stats>주문력 +70<br>체력 +300</stats><br><br><unique>고유 지속 효과- 죽음의 감촉:</unique> <a href='FlatMagicPen'>마법 관통력</a> +15<br><unique>고유 지속 효과- 저주받은 일격:</unique> 챔피언에게 마법 피해를 가하면 3초 동안 <a href='GrievousWounds'>고통스러운 상처</a> 효과를 적용합니다.",
      colloq: ';nmst;grievous',
      plaintext: '마법 피해량이 증가합니다.',
      from: ['3916', '1026'],
      image: {
        full: '3165.png',
        sprite: 'item1.png',
        group: 'item',
        x: 192,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 550,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: ['Health', 'SpellDamage', 'MagicPenetration'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMagicDamageMod: 70
      },
      effect: {
        Effect1Amount: '15',
        Effect2Amount: '40',
        Effect3Amount: '3',
        Effect4Amount: '0.2',
        Effect5Amount: '60',
        Effect6Amount: '1',
        Effect7Amount: '50',
        Effect8Amount: '150',
        Effect9Amount: '20'
      },
      depth: 3
    },
    '3170': {
      name: '달빛 마법검',
      description:
        '<stats>주문력 +50<br>방어력 +50<br>마법 저항력 +50</stats><br><br><unique>고유 지속 효과 - 강인함:</unique> 기절, 둔화, 도발, 공포, 침묵, 실명, 변이 및 이동 불가 효과의 지속시간을 35% 줄여줍니다.',
      colloq: ';moonflare;spellblade',
      plaintext: '방어력이 증가하고, 방해 효과의 지속시간이 줄어듭니다.',
      from: ['3191', '1057'],
      image: {
        full: '3170.png',
        sprite: 'item1.png',
        group: 'item',
        x: 240,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 580,
        purchasable: true,
        total: 2400,
        sell: 1680
      },
      tags: ['Armor', 'SpellBlock', 'SpellDamage', 'Tenacity'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 50,
        FlatMagicDamageMod: 50,
        FlatArmorMod: 50
      },
      depth: 3
    },
    '3172': {
      name: '서풍',
      description:
        '<stats>공격력 +50<br>공격 속도 +40%<br>이동 속도 +10%</stats><br><br><unique>고유 지속 효과 - 강인함:</unique> 기절, 둔화, 도발, 공포, 침묵, 실명, 변이 및 이동 불가 효과의 지속시간이 35% 감소합니다.',
      colloq: ';zephyr',
      plaintext: '이동 속도가 증가하고 강인함 효과를 받습니다.',
      from: ['1038', '1042', '1042'],
      image: {
        full: '3172.png',
        sprite: 'item1.png',
        group: 'item',
        x: 288,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 900,
        purchasable: true,
        total: 2800,
        sell: 1960
      },
      tags: ['Damage', 'AttackSpeed', 'NonbootsMovement', 'Tenacity'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 50,
        PercentMovementSpeedMod: 0.1,
        PercentAttackSpeedMod: 0.4
      },
      depth: 2
    },
    '3174': {
      name: '아테나의 부정한 성배',
      description:
        "<stats>주문력 +30<br>마법 저항력 +30<br>재사용 대기시간 감소 +10%<br><mana>기본 마나 재생 +100% </mana></stats><br><br><unique>고유 지속 효과:</unique> 챔피언에게 피해를 입혔을 때, <a href='premitigation'><font color='#6666FF'><u>감소 전</u></font></a> 피해량의 35%를 최대 <scaleLevel>100~250</scaleLevel>까지 피의 중첩으로 쌓습니다. 아군의 체력을 회복시키거나 보호막을 씌울 때 체력 회복량 또는 보호막 흡수량의 100%만큼 피의 중첩을 소모하여 아군을 회복시킵니다.<br><unique>고유 지속 효과 - 부조화:</unique> 기본 마나 재생 25%마다 주문력이 5만큼 증가합니다. 다른 아이템에 있는 <unique>조화</unique> 효과를 비활성화합니다.<br><br><rules>(피의 중첩 최대치는 레벨에 따라 늘어납니다. 중첩으로 인한 추가 회복량은 총 회복량에 적용됩니다.)</rules>",
      colloq: ';chalice;discord;athene;unholy;grail',
      plaintext: '적에게 피해를 입혀 회복과 보호막을 강화합니다.',
      from: ['3108', '3028'],
      image: {
        full: '3174.png',
        sprite: 'item1.png',
        group: 'item',
        x: 336,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 2100,
        sell: 1470
      },
      tags: [
        'SpellBlock',
        'HealthRegen',
        'SpellDamage',
        'ManaRegen',
        'CooldownReduction'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 30,
        FlatMagicDamageMod: 30
      },
      effect: {
        Effect1Amount: '10',
        Effect2Amount: '0',
        Effect3Amount: '0',
        Effect4Amount: '0',
        Effect5Amount: '5',
        Effect6Amount: '0.35',
        Effect7Amount: '100',
        Effect8Amount: '250',
        Effect9Amount: '1',
        Effect10Amount: '1',
        Effect11Amount: '0.25',
        Effect12Amount: '600',
        Effect13Amount: '8',
        Effect14Amount: '90'
      },
      depth: 3
    },
    '3175': {
      name: '카직스의 머리',
      description:
        '<unique>고유 사용 효과 - 뼈이빨 토템:</unique> 180초 동안 유지되는 투명 와드를 설치합니다. (재사용 대기시간 90초) 플레이어 당 맵에 설치할 수 있는 투명 와드의 수는 3개로 제한됩니다.<br><br><unique>고유 지속 효과 - 사냥 노획물:</unique> 렝가는 챔피언을 처치할 때마다 전리품을 수집하며, 현재 수집한 전리품 수에 비례하여 추가 효과가 부여됩니다. 챔피언을 처치하거나 어시스트를 올리면 전리품 1개가 생깁니다.<br><br><passive>전리품 3개:</passive> 렝가가 전투에서 벗어나 있거나 수풀에 들어가면 이동 속도가 25 상승합니다. <br><passive>전리품 6개:</passive> 렝가의 도약 범위가 125 늘어납니다.<br><passive>전리품 12개:</passive> 사냥의 전율 지속시간이 5초 증가합니다.<br><passive>전리품 20개:</passive> 렝가가 은신 상태일 때 사냥의 전율 이동 속도 증가 효과를 받습니다.',
      colloq: '',
      plaintext: '',
      specialRecipe: 3169,
      inStore: false,
      requiredChampion: 'Rengar',
      hideFromAll: true,
      image: {
        full: '3175.png',
        sprite: 'item1.png',
        group: 'item',
        x: 384,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ['Active', 'Trinket', 'Vision'],
      maps: {
        '11': true,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '25',
        Effect2Amount: '125',
        Effect3Amount: '5',
        Effect4Amount: '180',
        Effect5Amount: '90'
      }
    },
    '3179': {
      name: '그림자 검',
      description:
        "<stats>공격력 +50<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과</unique>: <a href='Lethality'>물리 관통력</a> +12<br><unique>고유 지속 효과 - 암전:</unique> 적 와드에 발각되면 8초간 암전을 일으켜 근처의 투명한 덫과 와드를 드러내고, 추가로 와드를 무력화시킵니다. (재사용 대기시간 45초) 모습이 드러난 덫은 기본 공격 시 즉시 파괴되며 와드는 세 배의 피해를 입습니다.",
      colloq: ';물리관통력;물관;ㅁㄱ',
      plaintext: '주기적으로 덫 및 와드를 감지할 수 있습니다.',
      from: ['3134', '1036', '1036'],
      image: {
        full: '3179.png',
        sprite: 'item1.png',
        group: 'item',
        x: 432,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 2400,
        sell: 1680
      },
      tags: [
        'Damage',
        'Vision',
        'CooldownReduction',
        'OnHit',
        'ArmorPenetration'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 50
      },
      effect: {
        Effect1Amount: '12',
        Effect2Amount: '8',
        Effect3Amount: '45'
      },
      depth: 3
    },
    '3181': {
      name: '핏빛 칼날',
      description:
        "<stats>공격력 +55<br>생명력 흡수 +15%</stats><br><br><unique>고유 지속 효과:</unique> <a href='Lethality'>물리 관통력</a> +10<br><unique>고유 지속 효과 - 피의 추격:</unique> 시야에 들어온 근처 적 챔피언이 하나 이하면 <a href='Lethality'>물리 관통력</a>이 8, 레벨에 따라 공격 속도가 20%~80% 증가합니다. 다른 적 챔피언들과 너무 가까워지면 3초에 걸쳐 원래대로 돌아옵니다.",
      colloq: ';물리관통력;물관;ㅁㄱ',
      plaintext:
        '혼자 있는 적 챔피언 추적 시 공격 속도와 물리 관통력이 증가합니다.',
      from: ['3134', '1053'],
      image: {
        full: '3181.png',
        sprite: 'item1.png',
        group: 'item',
        x: 0,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 1000,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: ['Damage', 'AttackSpeed', 'LifeSteal', 'ArmorPenetration'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 55,
        PercentLifeStealMod: 0.15
      },
      effect: {
        Effect1Amount: '10',
        Effect2Amount: '0.2',
        Effect3Amount: '0.8',
        Effect4Amount: '4',
        Effect5Amount: '3',
        Effect6Amount: '1400',
        Effect7Amount: '8'
      },
      depth: 3
    },
    '3184': {
      name: '수호자의 망치',
      description:
        '<stats>체력 +150<br>공격력 +20<br>생명력 흡수 +10%</stats><br><br><groupLimit>수호자 아이템은 1개만 소유할 수 있습니다.</groupLimit>',
      colloq: ';도란칼',
      plaintext: '공격에 특화된 시작 아이템입니다.',
      image: {
        full: '3184.png',
        sprite: 'item1.png',
        group: 'item',
        x: 48,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 950,
        purchasable: true,
        total: 950,
        sell: 380
      },
      tags: ['Health', 'Damage', 'LifeSteal', 'Lane'],
      maps: {
        '11': false,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 20,
        FlatHPPoolMod: 150,
        PercentLifeStealMod: 0.1
      }
    },
    '3190': {
      name: '강철의 솔라리 펜던트',
      description:
        '<stats>방어력 +30<br>마법 저항력 +60</stats><br><br><active>고유 사용 효과:</active> 2.5초간 근처 아군 챔피언들을 점차 사라지는 보호막으로 감싸 최대 120 (레벨당 +10) <scaleHealth>(+추가 체력의 20%)</scaleHealth>에 해당하는 피해를 흡수합니다. (재사용 대기시간 120초)<br><br><rules>보호막 레벨은 자기 자신과 대상 중 더 높은 쪽을 기준으로 합니다.<br>보호막 흡수량 %는 레벨에 비례합니다.<br>대상이 지난 20초 안에 다른 챔피언의 강철의 솔라리 펜던트 효과를 받은 경우 효과가 25%로 감소합니다.</rules>',
      colloq: ';locket;iron;solari',
      plaintext: '사용하면 주변 아군을 적의 공격에서 방어해 줍니다.',
      from: ['3105', '1033'],
      into: ['3383'],
      image: {
        full: '3190.png',
        sprite: 'item1.png',
        group: 'item',
        x: 96,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2200,
        sell: 1540
      },
      tags: ['SpellBlock', 'Armor', 'Active'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 60,
        FlatArmorMod: 30
      },
      effect: {
        Effect1Amount: '120',
        Effect2Amount: '10',
        Effect3Amount: '2.5',
        Effect4Amount: '0.25',
        Effect5Amount: '20',
        Effect6Amount: '120',
        Effect7Amount: '0.2'
      },
      depth: 3
    },
    '3191': {
      name: '추적자의 팔목 보호대',
      description:
        '<stats>방어력 +30<br>주문력 +20</stats><br><br><unique>고유 지속 효과:</unique> 유닛을 하나 처치하면 방어력과 주문력이 추가로 0.5 오릅니다. 이 효과는 최대 30번까지 중첩됩니다.',
      colloq: ';seeker;armguard',
      plaintext: '방어력과 주문력이 증가합니다.',
      from: ['1029', '1052', '1029'],
      into: ['3170', '3157'],
      image: {
        full: '3191.png',
        sprite: 'item1.png',
        group: 'item',
        x: 144,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 65,
        purchasable: true,
        total: 1100,
        sell: 770
      },
      tags: ['Armor', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 20,
        FlatArmorMod: 30
      },
      effect: {
        Effect1Amount: '0.5',
        Effect2Amount: '30'
      },
      depth: 2
    },
    '3193': {
      name: '가고일 돌갑옷',
      description:
        '<stats>방어력 +40<br>마법 저항력 +40</stats><br><br><unique>고유 지속 효과 - 바위 피부:</unique> 근처에 적 챔피언이 3명 이상 있으면 방어력과 마법 저항력이 추가로 40 상승합니다.<br><active>고유 사용 효과 - 강철화:</active> 4초 동안 입히는 피해량이 60% 감소하지만 체력이 40% 상승하고 크기가 거대해집니다. (재사용 대기시간 90초) 바위 피부가 활성화된 상태일 경우 체력이 100% 증가합니다.',
      colloq: ';',
      plaintext: '근처에 적이 많을 때 방어력을 크게 증가시킵니다.',
      from: ['1031', '1057', '2420'],
      image: {
        full: '3193.png',
        sprite: 'item1.png',
        group: 'item',
        x: 192,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 330,
        purchasable: true,
        total: 2500,
        sell: 1750
      },
      tags: ['Health', 'SpellBlock', 'Armor'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 40,
        FlatArmorMod: 40
      },
      effect: {
        Effect1Amount: '40',
        Effect2Amount: '850',
        Effect3Amount: '3',
        Effect4Amount: '4',
        Effect5Amount: '0.6',
        Effect6Amount: '0.4',
        Effect7Amount: '0.07',
        Effect8Amount: '1',
        Effect9Amount: '0.25',
        Effect10Amount: '90',
        Effect11Amount: '1'
      },
      depth: 3
    },
    '3194': {
      name: '적응형 투구',
      description:
        '<stats>체력 +350<br>마법 저항력 +55<br>기본 체력 재생 +100% <br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과:</unique> 스킬 또는 효과로 마법 피해를 입으면 4초 동안 같은 스킬이나 효과로 입는 마법 피해가 20% 감소합니다.',
      colloq: ';',
      plaintext: '반복되는 스킬 및 효과의 피해를 감소시킵니다.',
      from: ['1033', '3211', '1006'],
      image: {
        full: '3194.png',
        sprite: 'item1.png',
        group: 'item',
        x: 240,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 1000,
        purchasable: true,
        total: 2800,
        sell: 1960
      },
      tags: ['Health', 'SpellBlock', 'HealthRegen', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 350,
        FlatSpellBlockMod: 55
      },
      effect: {
        Effect1Amount: '20',
        Effect2Amount: '4',
        Effect3Amount: '25'
      },
      depth: 3
    },
    '3196': {
      name: '마공학 핵 mk-1',
      description:
        '<stats>레벨당 주문력 +3<br>레벨당 마나 +15</stats><br><br><unique>고유 지속 효과 - 진보:</unique> 빅토르가 기본 스킬 중 하나를 업그레이드할 수 있습니다.',
      colloq: ';viktor;빅토르;augment;power',
      plaintext: '빅토르가 선택한 스킬을 강화할 수 있게 해 줍니다.',
      from: ['3200'],
      requiredChampion: 'Viktor',
      into: ['3197'],
      image: {
        full: '3196.png',
        sprite: 'item1.png',
        group: 'item',
        x: 288,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 1150,
        purchasable: true,
        total: 1150,
        sell: 805
      },
      tags: ['Mana', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '3',
        Effect2Amount: '15'
      },
      depth: 2
    },
    '3197': {
      name: '마공학 핵 mk-2',
      description:
        '<stats>레벨당 주문력 +6<br>레벨당 마나 +20</stats><br><br><unique>고유 지속 효과 - 진보:</unique> 빅토르가 기본 스킬 중 하나를 업그레이드할 수 있습니다.',
      colloq: ';viktor;빅토르;augment;gravity',
      plaintext: '빅토르가 선택한 스킬을 강화할 수 있게 해 줍니다.',
      from: ['3196'],
      requiredChampion: 'Viktor',
      into: ['3198'],
      image: {
        full: '3197.png',
        sprite: 'item1.png',
        group: 'item',
        x: 336,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 1000,
        purchasable: true,
        total: 2150,
        sell: 1505
      },
      tags: ['Mana', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '6',
        Effect2Amount: '20'
      },
      depth: 3
    },
    '3198': {
      name: '완성형 마공학 핵',
      description:
        '<stats>레벨당 주문력 +10<br>레벨당 마나 +25</stats><br><br><unique>고유 지속 효과 - 영광스러운 진화:</unique> 빅토르가 힘의 정점에 도달하여, 기본 스킬과 더불어 혼돈의 폭풍 스킬을 업그레이드합니다.',
      colloq: ';viktor;빅토르;augment;death',
      plaintext: '빅토르가 선택한 스킬을 강화할 수 있게 해 줍니다.',
      from: ['3197'],
      requiredChampion: 'Viktor',
      image: {
        full: '3198.png',
        sprite: 'item1.png',
        group: 'item',
        x: 384,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 850,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: ['Mana', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '10',
        Effect2Amount: '25'
      },
      depth: 4
    },
    '3200': {
      name: '프로토타입 마공학 핵',
      description:
        '<stats>레벨당 주문력 +1<br>레벨당 마나 +10</stats><br><br><unique>고유 지속 효과 - 진보:</unique> 이 아이템은 세 번 업그레이드하여 빅토르의 기본 스킬을 강화할 수 있습니다.',
      colloq: ';viktor;빅토르;hex;core',
      plaintext:
        '주문력이 상승하고, 업그레이드하면 빅토르의 스킬을 강화할 수 있습니다.',
      inStore: false,
      requiredChampion: 'Viktor',
      into: ['3196'],
      image: {
        full: '3200.png',
        sprite: 'item1.png',
        group: 'item',
        x: 432,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '1',
        Effect2Amount: '10'
      }
    },
    '3211': {
      name: '망령의 두건',
      description:
        '<stats>체력 +250<br>마법 저항력 +25</stats><br><br><unique>고유 지속 효과:</unique> 적 챔피언으로부터 피해를 입은 후 최대 10초 동안 기본 체력 재생 150%가 부여됩니다.',
      colloq: ';모자;hat',
      plaintext: '방어력이 증가하고, 피해를 입으면 체력이 재생됩니다.',
      from: ['1028', '1033'],
      into: ['3065', '3194'],
      image: {
        full: '3211.png',
        sprite: 'item1.png',
        group: 'item',
        x: 0,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 350,
        purchasable: true,
        total: 1200,
        sell: 840
      },
      tags: ['Health', 'HealthRegen', 'SpellBlock'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 250,
        FlatSpellBlockMod: 25
      },
      effect: {
        Effect1Amount: '1.5',
        Effect2Amount: '10'
      },
      depth: 2
    },
    '3222': {
      name: '미카엘의 도가니',
      description:
        '<stats>마법 저항력 +40<br>재사용 대기시간 감소 +10%<br><mana>기본 마나 재생 +100% </mana></stats><br><br><unique>고유 지속 효과:</unique> 보호막 및 체력 회복 +20%<br><unique>고유 지속 효과 - 조화:</unique> 기본 마나 재생 %가 추가될 때마다 기본 체력 재생 %도 같은 수치만큼 추가됩니다.<br><active>고유 사용 효과:</active> 아군 챔피언에게 걸린 기절, 속박, 도발, 공포, 침묵, 둔화 효과를 모두 제거하고 2초 동안 둔화 효과에 면역이 되도록 합니다. (재사용 대기시간 120초).<br><br>해로운 효과를 정화하면 대상 아군의 이동 속도가 2초 동안 40% 상승합니다.',
      colloq: ';mikael;crucible',
      plaintext:
        '사용하면 아군 챔피언 하나에게 걸린 방해 효과를 모두 제거해 줍니다.',
      from: ['3028', '3114'],
      image: {
        full: '3222.png',
        sprite: 'item1.png',
        group: 'item',
        x: 48,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 2100,
        sell: 1470
      },
      tags: [
        'SpellBlock',
        'HealthRegen',
        'ManaRegen',
        'Active',
        'CooldownReduction'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 40
      },
      effect: {
        Effect1Amount: '2',
        Effect2Amount: '5',
        Effect3Amount: '0.5',
        Effect4Amount: '0.25',
        Effect5Amount: '600',
        Effect6Amount: '8',
        Effect7Amount: '90',
        Effect8Amount: '1',
        Effect9Amount: '1',
        Effect10Amount: '0.4',
        Effect11Amount: '0.2',
        Effect12Amount: '2',
        Effect13Amount: '120'
      },
      depth: 3
    },
    '3285': {
      name: '루덴의 메아리',
      description:
        '<stats>주문력 +90<br><mana>마나 +600</mana><br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 가속:</unique> 재사용 대기시간이 추가로 10% 감소합니다.<br><unique>고유 지속 효과 - 메아리:</unique> 이동하거나 주문을 시전할 때 전류가 충전됩니다. 충전량이 100이 되면 다음 스킬로 피해를 입혔을 때 충전된 전류를 전부 방출해, 최대 4명의 적에게 100 (+주문력의 10%)에 해당하는 마법 피해를 적중 시 추가로 입힙니다.',
      colloq: ';',
      plaintext: '주문력과 마나, 재사용 대기시간 감소량이 증가합니다.',
      from: ['3802', '1026'],
      into: ['3390'],
      image: {
        full: '3285.png',
        sprite: 'item1.png',
        group: 'item',
        x: 96,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 1050,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ['SpellDamage', 'Mana', 'CooldownReduction', 'OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 600,
        FlatMagicDamageMod: 90
      },
      effect: {
        Effect1Amount: '100',
        Effect2Amount: '100',
        Effect3Amount: '4',
        Effect4Amount: '0.1',
        Effect5Amount: '35',
        Effect6Amount: '10',
        Effect7Amount: '0',
        Effect8Amount: '0',
        Effect9Amount: '-0.1'
      },
      depth: 3
    },
    '3330': {
      name: '허수아비 (장신구)',
      description:
        "<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><active>사용 시:</active> 충전량을 1회 소모하여 주변을 드러내 주는 <font color='#FFFFFF'>허수아비</font>를 설치합니다. <br><br><font color='#FFFFFF'>허수아비</font>는 피들스틱의 레벨이 올라갈수록 더 빠르게 충전되고 더 오래 유지됩니다.",
      colloq: '노랑; 장신구; 와드',
      plaintext: '주기적으로 투명 와드를 설치합니다.',
      requiredChampion: 'FiddleSticks',
      image: {
        full: '3330.png',
        sprite: 'item1.png',
        group: 'item',
        x: 144,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ['Active', 'Jungle', 'Lane', 'Trinket', 'Vision'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '90',
        Effect2Amount: '240',
        Effect3Amount: '120',
        Effect4Amount: '120',
        Effect5Amount: '2',
        Effect6Amount: '9',
        Effect7Amount: '30',
        Effect8Amount: '120'
      }
    },
    '3340': {
      name: '와드 토템 (장신구)',
      description:
        "<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><active>사용 시:</active> 충전량을 1회 소모하여 <scaleLevel>90 ~ 120</scaleLevel>초 동안 주변을 드러내 주는 보이지 않는 <font color='#BBFFFF'>투명 와드</font>를 설치합니다. <br><br>매 <scaleLevel>240 ~ 120</scaleLevel>초마다 1회 충전되며 최대 2회까지 충전됩니다.<br><br>와드 지속시간과 충전 주기는 레벨이 오를수록 향상됩니다.<br><br><rules>(플레이어당 맵에 설치할 수 있는 <font color='#BBFFFF'>투명 와드</font>는 3개로 제한됩니다.)</rules>",
      colloq: '노랑; 토템; 장신구',
      plaintext: '주기적으로 투명 와드를 설치합니다.',
      image: {
        full: '3340.png',
        sprite: 'item1.png',
        group: 'item',
        x: 192,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ['Active', 'Jungle', 'Lane', 'Trinket', 'Vision'],
      maps: {
        '11': true,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '90',
        Effect2Amount: '240',
        Effect3Amount: '120',
        Effect4Amount: '120',
        Effect5Amount: '2',
        Effect6Amount: '9',
        Effect7Amount: '30',
        Effect8Amount: '120'
      }
    },
    '3348': {
      name: '비전 탐지기',
      description:
        "<active>고유 사용 효과 - 사냥꾼의 시야:</active> 특정 지역을 비전 안개로 뒤덮어 5초 동안 해당 지역을 볼 수 있게 되며 3초 동안 그 안의 적 함정에 대한 <font color='#ee91d7'>절대 시야</font>를 얻고, 적 챔피언들도 드러납니다. (재사용 대기시간 90초)",
      colloq: ';',
      plaintext: '사용하면 주변 지역의 시야를 밝혀줍니다.',
      inStore: false,
      image: {
        full: '3348.png',
        sprite: 'item1.png',
        group: 'item',
        x: 240,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ['Vision', 'Trinket', 'Stealth', 'Active'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '0',
        Effect3Amount: '0',
        Effect4Amount: '5',
        Effect5Amount: '3',
        Effect6Amount: '90'
      }
    },
    '3361': {
      name: '상급 투명 토템 (장신구)',
      description:
        "<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><levelLimit> 업그레이드하려면 9레벨 이상이 되어야 합니다.</levelLimit><stats></stats><br><br><unique>고유 사용 효과:</unique> 충전량을 1 소모하여, 180초 동안 유지되며 주변을 드러내 주는 투명한 와드를 설치합니다. 매 60초마다 충전량이 1 저장되어 최대 2회까지 충전됩니다. 플레이어 당 맵에 설치할 수 있는 <font color='#BBFFFF'>투명 와드</font>는 3개로 제한됩니다.<br><br><rules>(장신구는 게임 시작 후 30초 동안은 사용할 수 없습니다. 장신구를 하나 판매하면 이후 120초 동안 장신구 사용이 불가능합니다.)</rules>",
      colloq: ';노랑;yellow;greater;warding;relic',
      plaintext: '주기적으로 투명 와드를 설치합니다.',
      inStore: false,
      image: {
        full: '3361.png',
        sprite: 'item1.png',
        group: 'item',
        x: 288,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: false,
        total: 250,
        sell: 175
      },
      tags: ['Active', 'Trinket', 'Vision'],
      maps: {
        '11': true,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '180',
        Effect2Amount: '60',
        Effect3Amount: '0',
        Effect4Amount: '0',
        Effect5Amount: '0',
        Effect6Amount: '9',
        Effect7Amount: '30',
        Effect8Amount: '120'
      }
    },
    '3362': {
      name: '상급 투명 감지 토템 (장신구)',
      description:
        "<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><levelLimit> 업그레이드하려면 9레벨 이상이 되어야 합니다.</levelLimit><stats></stats><br><br><unique>고유 사용 효과:</unique> 파괴될 때까지 주변 지역과 투명한 유닛을 드러내 주는 불투명한 와드를 설치합니다. (재사용 대기시간 120초) 플레이어 당 맵에 설치할 수 있는 <font color='#BBFFFF'>투명 감지 와드</font>는 1개로 제한됩니다.<br><br><rules>(장신구는 게임 시작 후 30초 동안은 사용할 수 없습니다. 장신구를 하나 판매하면 이후 120초 동안 장신구 사용이 불가능합니다.)</rules>",
      colloq: ';노랑;yellow;greater;vision;relic;totem',
      plaintext: '주기적으로 투명 감지 와드를 설치합니다.',
      inStore: false,
      image: {
        full: '3362.png',
        sprite: 'item1.png',
        group: 'item',
        x: 336,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 250,
        purchasable: false,
        total: 250,
        sell: 175
      },
      tags: ['Active', 'Trinket', 'Vision'],
      maps: {
        '11': true,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '120',
        Effect2Amount: '0',
        Effect3Amount: '0',
        Effect4Amount: '0',
        Effect5Amount: '0',
        Effect6Amount: '9',
        Effect7Amount: '30',
        Effect8Amount: '120'
      }
    },
    '3363': {
      name: '망원형 개조',
      description:
        "<levelLimit>업그레이드하려면 9레벨 이상이 되어야 합니다.</levelLimit><br><groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><font color='#FFFFFF'>와드 토템</font> 장신구 업그레이드 시:<br><br><stats><font color='#00FF00'>+</font> 설치 가능 범위 대폭(+650%) 증가<br><font color='#00FF00'>+</font> 지속시간 제한 없음, 와드 설치 개수 제한에 관계 없음<br><font color='#FF0000'>-</font> <font color='#FF6600'>재사용 대기시간 10% 증가</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>누구나 볼 수 있는 와드로, 파괴 가능하고 아군의 대상으로 지정 불가</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>와드 시야 범위 45% 감소</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>상점 방문 시 충전되지 않음</font></stats>",
      colloq: '파랑; 토템; 장신구',
      plaintext: '설치 범위가 증가하며 대상 지역을 드러내 줍니다.',
      image: {
        full: '3363.png',
        sprite: 'item1.png',
        group: 'item',
        x: 384,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ['Active', 'Trinket', 'Vision'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '4000',
        Effect2Amount: '2',
        Effect3Amount: '5',
        Effect4Amount: '198',
        Effect5Amount: '60',
        Effect6Amount: '9',
        Effect7Amount: '30',
        Effect8Amount: '120',
        Effect9Amount: '6.5',
        Effect10Amount: '198',
        Effect11Amount: '99',
        Effect12Amount: '60',
        Effect13Amount: '180',
        Effect14Amount: '10',
        Effect15Amount: '45'
      }
    },
    '3364': {
      name: '예언자의 렌즈',
      description:
        '<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><active>사용 시:</active> 10초 동안 근처를 수색해 적 유닛이 숨어 있으면 경고를 보내며 주변의 투명한 덫과 와드를 드러내고, 추가로 와드를 무력화시킵니다. (재사용 대기시간 90~60초)',
      colloq: '빨강; 렌즈; 장신구',
      plaintext: '근처의 투명한 와드와 덫을 일정 시간 동안 차단합니다.',
      image: {
        full: '3364.png',
        sprite: 'item1.png',
        group: 'item',
        x: 432,
        y: 336,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ['Active', 'Trinket', 'Vision'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '6',
        Effect2Amount: '10',
        Effect3Amount: '90',
        Effect4Amount: '60',
        Effect5Amount: '0',
        Effect6Amount: '1',
        Effect7Amount: '30',
        Effect8Amount: '120',
        Effect9Amount: '60'
      }
    },
    '3371': {
      name: '무한의 용암대검',
      description:
        "<stats><font color='#FFFFFF'>공격력 +110</font><br>치명타 확률 +25%</stats><br><br><unique>고유 지속 효과:</unique> 치명타가 피해량의 200%가 아닌 225%를 가합니다.",
      colloq: ';오른;제작;용대;걸작',
      plaintext: '치명타 확률이 대폭 증가합니다.',
      from: ['3031'],
      requiredAlly: 'Ornn',
      image: {
        full: '3371.png',
        sprite: 'item1.png',
        group: 'item',
        x: 0,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3400,
        sell: 2380
      },
      tags: ['Damage', 'CriticalStrike'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 110,
        FlatCritChanceMod: 0.25
      },
      effect: {
        Effect1Amount: '2.25'
      },
      depth: 3
    },
    '3373': {
      name: '대장간 불꽃 망토',
      description:
        "<stats><font color='#FFFFFF'>체력 +750</font><br><font color='#FFFFFF'>방어력 +100</font></stats><br><br><unique>고유 지속 효과 - 불사르기:</unique> 주변 적을 불태워 초당 <scaleLevel>[26~43]</scaleLevel>의 마법 피해를 입힙니다. 12초에 한 번, 적에게 이동 방해 효과 사용 시 <scaleLevel>[26~43]</scaleLevel><scaleHealth>(+추가 체력의 4%)</scaleHealth>만큼 추가 마법 피해를 입히고 불의 파도가 발생해 주변에 추가 피해를 입힙니다. 불사르기는 미니언과 몬스터에게 피해가 50% 증가합니다.",
      colloq: ';오른;제작;걸작',
      plaintext: '주변 적에게 지속적으로 피해를 입힙니다.',
      from: ['3068'],
      requiredAlly: 'Ornn',
      image: {
        full: '3373.png',
        sprite: 'item1.png',
        group: 'item',
        x: 48,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 2750,
        sell: 1925
      },
      tags: ['Health', 'Armor'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 750,
        FlatArmorMod: 100
      },
      effect: {
        Effect1Amount: '26',
        Effect2Amount: '43',
        Effect3Amount: '0.5',
        Effect4Amount: '12',
        Effect5Amount: '0.04'
      },
      depth: 4
    },
    '3374': {
      name: '라바돈의 죽음왕관',
      description:
        "<stats><font color='#FFFFFF'>주문력 +175</font>  </stats><br><br><unique>고유 지속 효과:</unique> 주문력이 40% 상승합니다.",
      colloq: ';오른;제작;걸작;라왕',
      plaintext: '주문력이 대폭 상승합니다.',
      from: ['3089'],
      requiredAlly: 'Ornn',
      image: {
        full: '3374.png',
        sprite: 'item1.png',
        group: 'item',
        x: 96,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3600,
        sell: 2520
      },
      tags: ['SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 175
      },
      effect: {
        Effect1Amount: '40'
      },
      depth: 3
    },
    '3379': {
      name: '심연의 지옥불 가면',
      description:
        "<stats><font color='#FFFFFF'>체력 +750</font><br><mana>마나 +300</mana><br><font color='#FFFFFF'>마법 저항력 +100</font><br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 영원:</unique> 챔피언으로부터 입은 피해의 15%를 마나로 돌려받습니다. 마나 소모 시 20%를 체력으로 돌려받습니다. (스킬 사용 1회당 최대 25까지)<br><aura>고유 오오라:</aura> 주변 적 챔피언이 입는 마법 피해가 15% 증가합니다.",
      colloq: ';오른;제작;걸작',
      plaintext: '근처의 적이 입는 마법 피해가 증가합니다.',
      from: ['3001'],
      requiredAlly: 'Ornn',
      image: {
        full: '3379.png',
        sprite: 'item1.png',
        group: 'item',
        x: 144,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: [
        'Health',
        'SpellBlock',
        'HealthRegen',
        'Mana',
        'ManaRegen',
        'Aura',
        'CooldownReduction',
        'MagicPenetration'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 750,
        FlatSpellBlockMod: 100,
        FlatMPPoolMod: 300
      },
      effect: {
        Effect1Amount: '-10',
        Effect2Amount: '-25',
        Effect3Amount: '0.15',
        Effect4Amount: '25',
        Effect5Amount: '0.2',
        Effect6Amount: '0.15'
      },
      depth: 4
    },
    '3380': {
      name: '흑요석 양날 도끼',
      description:
        "<stats><font color='#FFFFFF'>체력 +550</font><br><font color='#FFFFFF'>공격력 +60</font><br>재사용 대기시간 감소 +20%</stats><br><br><unique>고유 지속 효과:</unique> 적 챔피언에게 물리 피해를 입히면 대상을 베어, 6초 동안 방어력을 4% 감소시킵니다. (최대 6번, 24%까지 중첩)<br><unique>고유 지속 효과 - 격분:</unique> 물리 피해를 입히면 2초 동안 이동 속도가 20 상승합니다. 베어낸 적 챔피언의 처치를 돕거나 어떤 유닛이든 처치하면 대신 2초 동안 이동 속도가 60 상승합니다. 원거리 챔피언은 이 이동 속도의 절반만 상승합니다.",
      colloq: ';오른;제작;걸작;흑요석망치',
      plaintext: '적 챔피언에게 물리 피해를 입히면 적의 방어력이 감소합니다.',
      from: ['3071'],
      requiredAlly: 'Ornn',
      image: {
        full: '3380.png',
        sprite: 'item1.png',
        group: 'item',
        x: 192,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3000,
        sell: 2100
      },
      tags: [
        'ArmorPenetration',
        'CooldownReduction',
        'Damage',
        'Health',
        'NonbootsMovement',
        'OnHit'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 60,
        FlatHPPoolMod: 550
      },
      effect: {
        Effect1Amount: '-0.2',
        Effect2Amount: '0.04',
        Effect3Amount: '6',
        Effect4Amount: '6',
        Effect5Amount: '0.24',
        Effect6Amount: '20',
        Effect7Amount: '2',
        Effect8Amount: '60',
        Effect9Amount: '2',
        Effect10Amount: '0.01'
      },
      depth: 4
    },
    '3382': {
      name: '신의 구원',
      description:
        "<stats><font color='#FFFFFF'>체력 +300</font><br><font color='#FFFFFF'>기본 체력 재생 +150% </font><br><font color='#FFFFFF'>기본 마나 재생 +200% </font><br>재사용 대기시간 감소 +10%</stats><br><br><passive>고유 지속 효과:</passive> 보호막 및 체력 회복 +10%<br><active>고유 사용 효과:</active> 5500 거리 안의 위치를 지정합니다. 2.5초 후 빛을 한 줄기 불러와 아군의 체력을 10 (+ 대상 레벨당 20)만큼 회복시키고 적 챔피언에게 최대 체력의 10%에 해당하는 <font color='#FFFFFF'>고정</font> 피해를 입힙니다. 적 미니언에게는 250의 <font color='#FFFFFF'>고정</font> 피해를 입힙니다. (재사용 대기시간 120초) 구원의 체력 회복량은 보호막 및 체력 회복 효과를3배로 적용받습니다.<br><br>죽은 상태로도 사용할 수 있습니다.<br><br><rules>(대상이 최근 다른 챔피언의 구원 효과를 받은 경우 효과가 반으로 감소합니다.)</rules>",
      colloq: ';오른;제작;걸작',
      plaintext:
        '활성화하면 주변 지역의 아군을 회복시키고 적에게는 피해를 입힙니다.',
      from: ['3107'],
      requiredAlly: 'Ornn',
      image: {
        full: '3382.png',
        sprite: 'item1.png',
        group: 'item',
        x: 240,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 2100,
        sell: 1470
      },
      tags: ['Health', 'HealthRegen', 'ManaRegen', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 300
      },
      effect: {
        Effect1Amount: '0.1',
        Effect2Amount: '10',
        Effect3Amount: '20',
        Effect4Amount: '0.1',
        Effect5Amount: '250',
        Effect6Amount: '120',
        Effect7Amount: '550',
        Effect8Amount: '5500',
        Effect9Amount: '0.5',
        Effect10Amount: '8',
        Effect11Amount: '3'
      },
      depth: 4
    },
    '3383': {
      name: '강철의 솔라리 왕관',
      description:
        "<stats><font color='#FFFFFF'>방어력 +45</font><br><font color='#FFFFFF'>마법 저항력 +75</font></stats><br><br><active>고유 사용 효과:</active> 2.5초간 근처 아군 챔피언들을 점차 사라지는 보호막으로 감싸 최대 120 (레벨당 +10) <scaleHealth>(+추가 체력의 20%)</scaleHealth>에 해당하는 피해를 흡수합니다. (재사용 대기시간 120초)<br><br><rules>레벨당 보호막 흡수량은 자기 자신과 대상 중 더 높은 쪽을 기준으로 합니다.<br>보호막 흡수량의 추가 체력 비례 %는 자신의 레벨을 기준으로 합니다.<br>대상이 지난 20초 안에 다른 챔피언에게서 강철의 솔라리 펜던트 효과를 받은 경우 효과가 25%로 감소합니다.</rules>",
      colloq: ';오른;제작;걸작',
      plaintext: '사용하면 주변 아군을 적의 공격에서 방어해 줍니다.',
      from: ['3190'],
      requiredAlly: 'Ornn',
      image: {
        full: '3383.png',
        sprite: 'item1.png',
        group: 'item',
        x: 288,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 2200,
        sell: 1540
      },
      tags: ['SpellBlock', 'Armor', 'Active'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatSpellBlockMod: 75,
        FlatArmorMod: 45
      },
      effect: {
        Effect1Amount: '120',
        Effect2Amount: '10',
        Effect3Amount: '2.5',
        Effect4Amount: '0.25',
        Effect5Amount: '20',
        Effect6Amount: '120',
        Effect7Amount: '0.2'
      },
      depth: 4
    },
    '3384': {
      name: '진 삼위일체',
      description:
        "<stats><font color='#FFFFFF'>체력 +350</font><br><font color='#FFFFFF'><mana>마나 +350</mana></font><br><font color='#FFFFFF'>공격력 +35</font><br><font color='#FFFFFF'>공격 속도 +50%</font><br>재사용 대기시간 감소 +20%<br><font color='#FFFFFF'>이동 속도 +8%</font></stats><br><br><unique>고유 지속 효과 - 격분:</unique> 기본 공격 시 2초간 이동 속도가 20 상승합니다. 적을 처치하면 이동 속도가 60 상승합니다. 원거리 챔피언의 경우 이동 속도 상승 효과는 절반만 적용됩니다.<br><unique>고유 지속 효과 - 주문 검:</unique> 스킬을 사용하고 나면 다음 기본 공격 적중 시 기본 공격력의 200%에 해당하는 추가 물리 피해를 입힙니다. (재사용 대기시간 1.5초)",
      colloq: ';진트포;오른;제작;걸작',
      plaintext: '엄청난 피해',
      from: ['3078'],
      requiredAlly: 'Ornn',
      image: {
        full: '3384.png',
        sprite: 'item1.png',
        group: 'item',
        x: 336,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3733,
        sell: 2613
      },
      tags: [
        'Health',
        'Damage',
        'AttackSpeed',
        'Mana',
        'CooldownReduction',
        'OnHit',
        'NonbootsMovement'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 35,
        PercentMovementSpeedMod: 0.08,
        FlatHPPoolMod: 350,
        FlatMPPoolMod: 350,
        PercentAttackSpeedMod: 0.5
      },
      effect: {
        Effect1Amount: '20',
        Effect2Amount: '60',
        Effect3Amount: '2',
        Effect4Amount: '2',
        Effect5Amount: '1.5'
      },
      depth: 4
    },
    '3386': {
      name: '존야의 역설',
      description:
        "<stats><font color='#FFFFFF'>주문력 +100</font><br><font color='#FFFFFF'>방어력 +60</font><br>재사용 대기시간 감소 +10%</stats><br><br><active>고유 사용 효과 - 경직:</active> 챔피언이 2.5초 동안 아무런 행동도 취할 수 없는 대신 공격도 받지 않는 무적 상태가 됩니다. (재사용 대기시간 120초)",
      colloq: ';존야;오른;제작;whsdi',
      plaintext:
        '사용하면 아무런 행동도 취할 수 없는 대신 공격도 받지 않는 무적 상태가 됩니다.',
      from: ['3157'],
      requiredAlly: 'Ornn',
      image: {
        full: '3386.png',
        sprite: 'item1.png',
        group: 'item',
        x: 384,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ['Armor', 'SpellDamage', 'Active', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 100,
        FlatArmorMod: 60
      },
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '2.5',
        Effect3Amount: '120'
      },
      depth: 4
    },
    '3387': {
      name: '얼어붙은 주먹',
      description:
        "<stats><font color='#FFFFFF'>방어력 +125</font><br>재사용 대기시간 감소 +20%<br><font color='#FFFFFF'>마나 +700</font></stats><br><br><unique>고유 지속 효과 - 주문 검:</unique> 스킬을 사용하고 나면 다음 기본 공격 적중 시 대상 근처의 적들에게 기본 공격력의 100%만큼 추가 물리 피해를 입히고 2초간 역장을 생성하여, 안에 갇힌 적의 속도를 30% 늦춥니다. (재사용 대기시간 1.5초)<br><br>역장의 크기는 추가 방어력에 비례해 커집니다.",
      colloq: ';얼어붙은 주먹;오른;dhfms;ornn;ㅇㄹ',
      plaintext: '스킬을 사용한 후 기본 공격을 하면 둔화 역장이 생성됩니다.',
      from: ['3025'],
      requiredAlly: 'Ornn',
      image: {
        full: '3387.png',
        sprite: 'item1.png',
        group: 'item',
        x: 432,
        y: 384,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 2700,
        sell: 1890
      },
      tags: ['Armor', 'Mana', 'CooldownReduction', 'Slow'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 700,
        FlatArmorMod: 125
      },
      effect: {
        Effect1Amount: '-0.2',
        Effect2Amount: '1',
        Effect3Amount: '2',
        Effect4Amount: '-0.3',
        Effect5Amount: '1.5'
      },
      depth: 4
    },
    '3388': {
      name: '요우무의 망령검',
      description:
        "<stats><font color='#FFFFFF'>공격력 +75</font><br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과:</unique> <font color='#FFFFFF'><a href='Lethality'>물리 관통력</a>+25</font><br><unique>고유 지속 효과:</unique> 전투에서 벗어나 있을 때 이동 속도 +40<br><active>고유 사용 효과:</active> 6초 동안 이동 속도가 +20% 증가하며 유닛을 통과할 수 있습니다. (재사용 대기시간 45초)",
      colloq: ';물리 관통력;오른;dhfms;ornn;ㅇㄹ',
      plaintext: '사용하면 이동 속도가 대폭 상승합니다.',
      from: ['3142'],
      requiredAlly: 'Ornn',
      image: {
        full: '3388.png',
        sprite: 'item1.png',
        group: 'item',
        x: 0,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: [
        'Damage',
        'Active',
        'CooldownReduction',
        'NonbootsMovement',
        'ArmorPenetration'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 75
      },
      effect: {
        Effect1Amount: '45',
        Effect2Amount: '25',
        Effect3Amount: '0.2',
        Effect4Amount: '0',
        Effect5Amount: '6',
        Effect6Amount: '40'
      },
      depth: 4
    },
    '3389': {
      name: '몰락한 왕의 힘',
      description:
        "<stats><font color='#FFFFFF'>공격력 +55</font><br><font color='#FFFFFF'>공격 속도 +40%</font><br>생명력 흡수 +12%</stats><br><br><unique>고유 지속 효과:</unique> 기본 공격 적중 시 대상 현재 체력의 8%에 해당하는 추가 물리 피해를 입힙니다. (근접 챔피언은 12%)<br><active>고유 사용 효과:</active> 적 챔피언에게 100의 마법 피해를 입히고, 3초 동안 대상 이동 속도의 25%를 훔칩니다. (재사용 대기시간 90초)<br><br><rules>최소 15의 추가 물리 피해를 입힙니다.<br>몬스터 및 미니언에게 최대 60의 추가 물리 피해를 입힙니다.<br>사용자가 입힌 추가 물리 피해에 생명력 흡수가 적용됩니다.</rules>",
      colloq: ';몰왕;몰왕검;오른;dhfms;ornn;ㅇㄹ',
      plaintext:
        '상대의 체력에 비례하여 피해를 입히고, 상대의 이동 속도를 훔칠 수 있습니다.',
      from: ['3153'],
      requiredAlly: 'Ornn',
      image: {
        full: '3389.png',
        sprite: 'item1.png',
        group: 'item',
        x: 48,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3300,
        sell: 2310
      },
      tags: [
        'Damage',
        'AttackSpeed',
        'LifeSteal',
        'Active',
        'Slow',
        'OnHit',
        'NonbootsMovement'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 55,
        PercentAttackSpeedMod: 0.4,
        PercentLifeStealMod: 0.12
      },
      effect: {
        Effect1Amount: '0.08',
        Effect2Amount: '0.12',
        Effect3Amount: '15',
        Effect4Amount: '60'
      },
      depth: 5
    },
    '3390': {
      name: '루덴의 파동',
      description:
        "<stats><font color='#FFFFFF'>주문력 +120</font><br><mana><font color='#FFFFFF'>마나 +850</font></mana><br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 가속:</unique> 재사용 대기시간이 추가로 10% 감소합니다.<br><unique>고유 지속 효과 - 메아리:</unique> 이동하거나 스킬을 사용할 때 전류가 충전됩니다. 충전량이 100에 도달하면 다음 스킬로 피해를 입혔을 때 충전된 전류를 전부 방출해, 최대 4명의 적에게 100 (+주문력의 10%)에 해당하는 마법 피해를 적중 시 추가로 입힙니다.",
      colloq: ';오른;dhfms;ornn;ㅇㄹ',
      plaintext: '주문력과 마나, 재사용 대기시간 감소량이 증가합니다.',
      from: ['3285'],
      requiredAlly: 'Ornn',
      image: {
        full: '3390.png',
        sprite: 'item1.png',
        group: 'item',
        x: 96,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 3200,
        sell: 2240
      },
      tags: ['SpellDamage', 'Mana', 'CooldownReduction', 'OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 850,
        FlatMagicDamageMod: 120
      },
      effect: {
        Effect1Amount: '100',
        Effect2Amount: '100',
        Effect3Amount: '4',
        Effect4Amount: '0.1',
        Effect5Amount: '35',
        Effect6Amount: '10',
        Effect7Amount: '0',
        Effect8Amount: '0',
        Effect9Amount: '-0.1'
      },
      depth: 4
    },
    '3400': {
      name: "'수당'",
      description:
        '<spellPassive>클릭하여 사용:</spellPassive> 다음 효과를 얻습니다. <gold>골드</gold>!',
      colloq: '',
      plaintext: '',
      consumed: true,
      inStore: false,
      hideFromAll: true,
      image: {
        full: '3400.png',
        sprite: 'item1.png',
        group: 'item',
        x: 144,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ['Consumable', 'GoldPer'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {}
    },
    '3410': {
      name: '카직스의 머리',
      description:
        '<unique>고유 사용 효과 - 탐지용 렌즈:</unique> 6초 동안 중간 반경 내의 투명한 덫과 투명 와드를 드러내서 차단하고 10초간 투명한 유닛을 감지할 수 있게 됩니다. (재사용 대기시간 60초)<br><br><unique>고유 지속 효과 - 사냥 노획물:</unique> 렝가는 챔피언을 처치할 때마다 전리품을 수집하며, 현재 수집한 전리품 수에 비례하여 추가 효과가 부여됩니다. 챔피언을 처치하거나 어시스트를 올리면 전리품 1개가 생깁니다.<br><br><passive>전리품 3개:</passive> 렝가가 전투에서 벗어나 있거나 수풀에 들어가면 이동 속도가 25 상승합니다. <br><passive>전리품 6개:</passive> 렝가의 도약 범위가 125 늘어납니다.<br><passive>전리품 12개:</passive> 사냥의 전율 지속시간이 5초 증가합니다.<br><passive>전리품 20개:</passive> 렝가가 은신 상태일 때 사냥의 전율 이동 속도 증가분이 두 배가 됩니다.',
      colloq: '',
      plaintext: '',
      specialRecipe: 3169,
      inStore: false,
      requiredChampion: 'Rengar',
      hideFromAll: true,
      image: {
        full: '3410.png',
        sprite: 'item1.png',
        group: 'item',
        x: 192,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ['Active', 'Trinket', 'Vision'],
      maps: {
        '11': true,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '25',
        Effect2Amount: '125',
        Effect3Amount: '5',
        Effect4Amount: '6',
        Effect5Amount: '10',
        Effect6Amount: '60'
      }
    },
    '3416': {
      name: '카직스의 머리',
      description:
        '<unique>고유 사용 효과 - 수정:</unique> 2초 동안 4000 범위 내의 작은 지역을 드러냅니다. 발각된 적 챔피언들은 5초간 위치가 드러납니다. (재사용 대기시간 90초)<br><br><unique>고유 지속 효과 - 사냥 노획물:</unique> 렝가는 챔피언을 처치할 때마다 전리품을 수집하며, 현재 수집한 전리품 수에 비례하여 추가 효과가 부여됩니다. 챔피언을 처치하거나 어시스트를 올리면 전리품 1개가 생깁니다.<br><br><passive>전리품 3개:</passive> 렝가가 전투에서 벗어나 있거나 수풀에 들어가면 이동 속도가 25 상승합니다. <br><passive>전리품 6개:</passive> 렝가의 도약 범위가 125 늘어납니다.<br><passive>전리품 12개:</passive> 사냥의 전율 지속시간이 5초 증가합니다.<br><passive>전리품 20개:</passive> 렝가가 은신 상태일 때 사냥의 전율 이동 속도 증가분이 두 배가 됩니다.',
      colloq: '',
      plaintext: '',
      specialRecipe: 3169,
      inStore: false,
      requiredChampion: 'Rengar',
      hideFromAll: true,
      image: {
        full: '3416.png',
        sprite: 'item1.png',
        group: 'item',
        x: 240,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ['Active', 'Trinket', 'Vision'],
      maps: {
        '11': true,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '25',
        Effect2Amount: '125',
        Effect3Amount: '5',
        Effect4Amount: '4000',
        Effect5Amount: '2',
        Effect6Amount: '5',
        Effect7Amount: '90'
      }
    },
    '3422': {
      name: '카직스의 머리',
      description:
        '<unique>고유 지속 효과 - 사냥 노획물:</unique> 렝가는 챔피언을 처치할 때마다 전리품을 수집하며, 현재 수집한 전리품 수에 비례하여 추가 효과가 부여됩니다. 챔피언을 처치하거나 어시스트를 올리면 전리품 1개가 생깁니다.<br><br><passive>전리품 3개:</passive> 렝가가 전투에서 벗어나 있거나 수풀에 들어가면 이동 속도가 25 상승합니다. <br><passive>전리품 6개:</passive> 렝가의 도약 범위가 125 늘어납니다.<br><passive>전리품 12개:</passive> 사냥의 전율 지속시간이 5초 증가합니다.<br><passive>전리품 20개:</passive> 렝가가 은신 상태일 때 사냥의 전율 이동 속도 증가분이 두 배가 됩니다.',
      colloq: '',
      plaintext: '',
      specialRecipe: 3169,
      inStore: false,
      requiredChampion: 'Rengar',
      hideFromAll: true,
      image: {
        full: '3422.png',
        sprite: 'item1.png',
        group: 'item',
        x: 288,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ['Active', 'Trinket', 'Vision'],
      maps: {
        '11': false,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '25',
        Effect2Amount: '125',
        Effect3Amount: '5'
      }
    },
    '3455': {
      name: '카직스의 머리',
      description:
        '<unique>고유 지속 효과 - 사냥 노획물:</unique> 렝가는 챔피언을 처치할 때마다 전리품을 수집하며, 현재 수집한 전리품 수에 비례하여 추가 효과가 부여됩니다. 챔피언을 처치하거나 어시스트를 올리면 전리품 1개가 생깁니다.<br><br><passive>전리품 3개:</passive> 렝가가 전투에서 벗어나 있거나 수풀에 들어가면 이동 속도가 25 상승합니다. <br><passive>전리품 6개:</passive> 렝가의 도약 범위가 125 늘어납니다.<br><passive>전리품 12개:</passive> 사냥의 전율 지속시간이 5초 증가합니다.<br><passive>전리품 20개:</passive> 렝가가 은신 상태일 때 사냥의 전율 이동 속도 증가분이 두 배가 됩니다.',
      colloq: '',
      plaintext: '',
      specialRecipe: 3169,
      inStore: false,
      requiredChampion: 'Rengar',
      hideFromAll: true,
      image: {
        full: '3455.png',
        sprite: 'item1.png',
        group: 'item',
        x: 336,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ['Active', 'Trinket', 'Vision'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '25',
        Effect2Amount: '125',
        Effect3Amount: '5'
      }
    },
    '3504': {
      name: '불타는 향로',
      description:
        '<stats>주문력 +60<br>재사용 대기시간 감소 +10%<br><mana>기본 마나 재생 +50% </mana></stats><br><br><unique>고유 지속 효과:</unique> 회복 및 보호막 효과 +10%<br><unique>고유 지속 효과:</unique> 이동 속도 +8%<br><unique>고유 지속 효과:</unique> 아군을 치유하거나 보호막을 씌워주면 자신과 대상 아군의 공격 속도가 10% ~ 30% 상승합니다. 또한 이 상태에서 공격이 적중하면 6초 동안 5 ~ 20의 추가 마법 피해를 입힙니다. <br><br><rules>재생 효과에는 적용되지 않습니다. 추가 효과는 대상의 레벨에 따라 달라집니다.</rules>',
      colloq: '',
      plaintext:
        '다른 유닛에게 보호막과 치유 효과를 쓰면 잠깐 동안 대상과 자신의 공격 속도가 상승합니다. 또한 이 상태에서 기본 공격이 적중하면 추가 마법 피해를 입힙니다.',
      from: ['3114', '3113'],
      image: {
        full: '3504.png',
        sprite: 'item1.png',
        group: 'item',
        x: 384,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2300,
        sell: 1610
      },
      tags: [
        'CooldownReduction',
        'ManaRegen',
        'NonbootsMovement',
        'SpellDamage'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 60
      },
      effect: {
        Effect1Amount: '0.08',
        Effect2Amount: '0.1',
        Effect3Amount: '6',
        Effect4Amount: '5',
        Effect5Amount: '0.1',
        Effect6Amount: '0.3',
        Effect7Amount: '20'
      },
      depth: 3
    },
    '3508': {
      name: '정수 약탈자',
      description:
        '<stats>공격력 +70<br>치명타 확률 +25%</stats><br><br><unique>고유 지속 효과:</unique> 재사용 대기시간 감소 +20%<br><unique>고유 지속 효과:</unique> 기본 공격 시 잃은 마나의 1.5%를 회복합니다.',
      colloq: ';',
      plaintext:
        '치명타 확률과 공격력이 증가하고 재사용 대기시간이 감소하며 공격 적중 시 마나를 회복합니다.',
      from: ['1038', '3133', '1018'],
      image: {
        full: '3508.png',
        sprite: 'item1.png',
        group: 'item',
        x: 432,
        y: 432,
        w: 48,
        h: 48
      },
      gold: {
        base: 100,
        purchasable: true,
        total: 3300,
        sell: 2310
      },
      tags: [
        'Damage',
        'CriticalStrike',
        'Mana',
        'ManaRegen',
        'CooldownReduction'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 70,
        FlatCritChanceMod: 0.25
      },
      effect: {
        Effect1Amount: '0.015',
        Effect2Amount: '0.2',
        Effect3Amount: '0.5',
        Effect4Amount: '0.2',
        Effect5Amount: '6',
        Effect6Amount: '30',
        Effect7Amount: '0.2',
        Effect8Amount: '10'
      },
      depth: 3
    },
    '3513': {
      name: '전령의 눈',
      description:
        '<br><unique>고유 지속 효과 - 공허의 자취:</unique> 전령의 눈을 획득하면 귀환이 강화됩니다.<br><br><active>고유 사용 효과:</active> 1초 동안 정신을 집중해 전령의 눈을 파괴하고 협곡의 전령을 소환합니다. 소환된 전령은 적 포탑을 공격합니다.<br><br>전령의 눈을 240초 동안 사용하지 않으면 공허로 사라집니다.',
      colloq: ';전령의 눈',
      plaintext: '전령의 눈 - 공허로부터 온 선물입니다.',
      consumed: true,
      inStore: false,
      image: {
        full: '3513.png',
        sprite: 'item2.png',
        group: 'item',
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ['Trinket', 'Active'],
      maps: {
        '11': false,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '240',
        Effect2Amount: '1',
        Effect3Amount: '20',
        Effect4Amount: '180'
      }
    },
    '3514': {
      name: '전령의 눈',
      description:
        '<br><unique>고유 지속 효과 - 공허의 자취:</unique> 전령의 눈을 획득하면 귀환이 강화됩니다.<br><br><active>고유 사용 효과:</active> 1초 동안 정신을 집중해 전령의 눈을 파괴하고 협곡의 전령을 소환합니다. 소환된 전령은 적 포탑을 공격합니다.<br><br>전령의 눈을 240초 동안 사용하지 않으면 공허로 사라집니다.',
      colloq: ';전령의 눈',
      plaintext: '전령의 눈 - 공허로부터 온 선물입니다.',
      consumed: true,
      inStore: false,
      image: {
        full: '3514.png',
        sprite: 'item2.png',
        group: 'item',
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ['Trinket', 'Active'],
      maps: {
        '11': false,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '240',
        Effect2Amount: '1',
        Effect3Amount: '40'
      }
    },
    '3520': {
      name: '유령 포로',
      description:
        "<subtitleLeft><font color='#FFFFFF'>(장신구)</font></subtitleLeft><br><mainText><active>사용 시:</active> 유령 포로가 수풀에 머물도록 명령합니다. 자신 또는 자신이 소환한 유령 포로가 적진에 있을 경우 추가 능력치를 얻습니다.</mainText>",
      colloq: '',
      plaintext: '',
      consumed: true,
      inStore: false,
      image: {
        full: '3520.png',
        sprite: 'item2.png',
        group: 'item',
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
      },
      tags: ['Vision', 'Trinket', 'Active'],
      maps: {
        '11': false,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '240',
        Effect2Amount: '3.5',
        Effect3Amount: '42'
      }
    },
    '3599': {
      name: '칠흑의 창',
      description:
        '<stats></stats><br><active>사용 효과:</active> 아군에게 이 게임 동안 결속되는 계약을 제의합니다. 계약이 수락되면 해당 아군과 가까이 있을 때 둘이 모두 강화됩니다.',
      colloq: ';창',
      plaintext: '아군 계약자에게 결속시키는 칼리스타의 창입니다.',
      requiredChampion: 'Kalista',
      image: {
        full: '3599.png',
        sprite: 'item2.png',
        group: 'item',
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ['Active'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {}
    },
    '3600': {
      name: '칠흑의 창',
      description:
        '<stats></stats><br><active>사용 시:</active> 아군에게 이 게임 동안 결속되는 계약을 제의합니다. 계약이 수락되면 해당 아군과 가까이 있을 때 둘이 모두 강화됩니다.',
      colloq: ';창',
      plaintext: '아군 계약자에게 결속시키는 칼리스타의 창입니다.',
      requiredChampion: 'Sylas',
      image: {
        full: '3600.png',
        sprite: 'item2.png',
        group: 'item',
        x: 192,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ['Active'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {}
    },
    '3671': {
      name: '마법 부여: 용사',
      description: '<stats>공격력 +60<br>재사용 대기시간 +10%</stats>',
      colloq: ';',
      plaintext: '',
      from: ['3133'],
      hideFromAll: true,
      image: {
        full: '3671.png',
        sprite: 'item2.png',
        group: 'item',
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 525,
        purchasable: true,
        total: 1625,
        sell: 1138
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 60
      },
      depth: 3
    },
    '3672': {
      name: '마법 부여: 잿불거인',
      description:
        '<stats>체력 +325<br>추가 체력 +15%</stats><br><br><unique>고유 지속 효과 - 불사르기:</unique> 전투 중일 때 근처 적에게 초당 7 (챔피언 레벨당 +2)의 마법 피해를 입힙니다. 몬스터에게는 100%의 추가 피해를 입힙니다. ',
      colloq: ';',
      plaintext: '',
      from: ['3751'],
      hideFromAll: true,
      image: {
        full: '3672.png',
        sprite: 'item2.png',
        group: 'item',
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 525,
        purchasable: true,
        total: 1425,
        sell: 998
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 325
      },
      depth: 3
    },
    '3673': {
      name: '마법 부여: 룬의 메아리',
      description:
        '<stats>주문력 +60<br>이동 속도 +7% </stats><br><br><unique>고유 지속 효과 - 메아리:</unique> 이동하거나 스킬을 사용하면 중첩이 쌓입니다. 중첩이 100회 쌓이면 다음에 스킬로 피해를 입혔을 때 중첩을 모두 소모하여 최대 4명의 대상에게 60 (+ 주문력의 10%)의 추가 마법 피해를 입힙니다.<br><br> 대형 몬스터에게는 250%의 피해를 입히며, 이 효과가 대형 몬스터에게 적중하면 잃은 마나의 18%를 회복합니다.',
      colloq: ';',
      plaintext: '',
      from: ['3113', '1052'],
      hideFromAll: true,
      image: {
        full: '3673.png',
        sprite: 'item2.png',
        group: 'item',
        x: 336,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 340,
        purchasable: true,
        total: 1625,
        sell: 1138
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        PercentMovementSpeedMod: 0.07,
        FlatMagicDamageMod: 60
      },
      depth: 3
    },
    '3675': {
      name: '마법 부여: 피갈퀴손',
      description:
        '<stats>공격 속도 +50%</stats><br><br><unique>고유 지속 효과:</unique> 기본 공격 적중 시 대상 최대 체력의 4%만큼 추가 물리 피해를 입힙니다. (몬스터와 미니언 상대로 최대 75)',
      colloq: ';',
      plaintext: '',
      from: ['1043'],
      hideFromAll: true,
      image: {
        full: '3675.png',
        sprite: 'item2.png',
        group: 'item',
        x: 384,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 625,
        purchasable: true,
        total: 1625,
        sell: 1138
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        PercentAttackSpeedMod: 0.5
      },
      depth: 3
    },
    '3680': {
      name: '얼음 간식',
      description:
        "<active>사용 시 - <a href='FeedTheKing'>왕에게 먹이를</a>:</active> 왕이 미사일 다발을 멀리 발사해 중심부에 있는 적에게는 각각 <scaleLevel>213~775</scaleLevel>의 마법 피해를, 가장자리에 있는 적에게는 최저 <scaleLevel>85~310</scaleLevel>의 피해를 입힙니다. (재사용 대기시간 120초)",
      colloq: '',
      plaintext: '왕이 얼음 미사일 다발을 발사합니다.',
      image: {
        full: '3680.png',
        sprite: 'item2.png',
        group: 'item',
        x: 432,
        y: 0,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ['Trinket', 'Lane'],
      maps: {
        '11': false,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '5',
        Effect2Amount: '120',
        Effect3Amount: '40',
        Effect4Amount: '15',
        Effect5Amount: '250',
        Effect6Amount: '213',
        Effect7Amount: '775',
        Effect8Amount: '85',
        Effect9Amount: '310'
      }
    },
    '3681': {
      name: '화르륵 매운맛 간식',
      description:
        "<active>사용 시 - <a href='FeedTheKing'>왕에게 먹이를</a>:</active> 왕이 원뿔형으로 불을 내뿜어 4초 동안 적에게 <scaleLevel>705~1479</scaleLevel>의 고정 피해를 입힙니다. 포탑에게는 560의 고정 피해를 입힙니다. (재사용 대기시간 120초)",
      colloq: '',
      plaintext: '왕이 불을 내뿜어 유닛과 포탑을 불태웁니다.',
      image: {
        full: '3681.png',
        sprite: 'item2.png',
        group: 'item',
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ['Trinket', 'Lane'],
      maps: {
        '11': false,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '4',
        Effect2Amount: '120',
        Effect3Amount: '700',
        Effect4Amount: '2.35',
        Effect5Amount: '560',
        Effect6Amount: '705',
        Effect7Amount: '1479'
      }
    },
    '3682': {
      name: '에스프레소 간식',
      description:
        "<active>사용 시 - <a href='FeedTheKing'>왕에게 먹이를</a>:</active> 왕이 공중으로 뛰어올랐다가 두 차례 땅으로 떨어질 때마다 적을 밀어내고 <scaleLevel>40~190</scaleLevel>의 물리 피해를 입힙니다. 포로 왕에게는 <font color='#FF3300'>최대 체력의 20%</font>에 해당하는 보호막이 생기며, 보호막은 4초에 걸쳐 사라집니다. (재사용 대기시간 30초)",
      colloq: '',
      plaintext: '왕이 적을 뒤로 밀어내고 거대한 보호막을 얻습니다.',
      image: {
        full: '3682.png',
        sprite: 'item2.png',
        group: 'item',
        x: 48,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ['Trinket', 'Lane'],
      maps: {
        '11': false,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '1.8',
        Effect2Amount: '30',
        Effect3Amount: '10',
        Effect4Amount: '10',
        Effect5Amount: '20',
        Effect6Amount: '4',
        Effect7Amount: '600',
        Effect8Amount: '40',
        Effect9Amount: '190',
        Effect10Amount: '500'
      }
    },
    '3683': {
      name: '무지개 간식 파티 세트',
      description:
        "<active>사용 시 - <a href='FeedTheKing'>왕에게 먹이를</a>:</active> 왕이 적 뒤로 간식을 잔뜩 던져 포로들을 유인한 뒤 다시 자신에게 돌아오게 합니다. 포로와 부딪힌 적 챔피언은 앞으로 밀려나며 <scaleLevel>230~680</scaleLevel>의 물리 피해를 입습니다. (재사용 대기시간 120초)",
      colloq: '',
      plaintext: '왕이 던진 포로들이 적을 왕 쪽으로 밀어냅니다.',
      image: {
        full: '3683.png',
        sprite: 'item2.png',
        group: 'item',
        x: 96,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ['Trinket', 'Lane'],
      maps: {
        '11': false,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '6',
        Effect2Amount: '120',
        Effect3Amount: '140',
        Effect4Amount: '30',
        Effect5Amount: '1',
        Effect6Amount: '1500',
        Effect7Amount: '1650',
        Effect8Amount: '1000',
        Effect9Amount: '230',
        Effect10Amount: '680',
        Effect11Amount: '2'
      }
    },
    '3684': {
      name: '빛의 인도자 간식',
      description:
        "<active>사용 시 - <a href='FeedTheKing'>왕에게 먹이를</a>:</active> 포로 왕이 챔피언을 자신의 옆으로 끌어옵니다. 최대 4초 동안 해당 챔피언은 대상으로 지정되지 않으며 공격할 수 없는 상태가 됩니다. 마우스를 클릭하여 지정한 위치로 날아갈 수 있습니다. 적 챔피언에게 부딪치면 멈추며, 좁은 반경 안의 모든 적을 뒤로 밀어냅니다. 충격파는 원뿔형 범위에 <scaleLevel>230~680</scaleLevel>의 물리 피해를 입힙니다. (재사용 대기시간 120초)",
      colloq: '',
      plaintext: '왕: 챔피언을 지정한 위치로 발사합니다.',
      image: {
        full: '3684.png',
        sprite: 'item2.png',
        group: 'item',
        x: 144,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ['Trinket', 'Lane'],
      maps: {
        '11': false,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '6',
        Effect2Amount: '120',
        Effect3Amount: '140',
        Effect4Amount: '30',
        Effect5Amount: '230',
        Effect6Amount: '680'
      }
    },
    '3685': {
      name: '어둠의 인도자 간식',
      description:
        "<active>사용 시 - <a href='FeedTheKing'>왕에게 먹이를</a>:</active> 포로 왕이 자신의 뒤에 검은 바람을 소환한 후 전방에 나선형으로 발사하여 <scaleLevel>230~680</scaleLevel>의 물리 피해를 입히고 적을 공중으로 띄워 올립니다. (재사용 대기시간 120초)",
      colloq: '',
      plaintext: '왕: 자신의 뒤에 회오리바람을 소환하여 앞으로 발사합니다.',
      image: {
        full: '3685.png',
        sprite: 'item2.png',
        group: 'item',
        x: 192,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: ['Trinket', 'Lane'],
      maps: {
        '11': false,
        '12': true,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '2',
        Effect2Amount: '120',
        Effect3Amount: '140',
        Effect4Amount: '30',
        Effect5Amount: '7',
        Effect6Amount: '900',
        Effect7Amount: '1200',
        Effect8Amount: '230',
        Effect9Amount: '680'
      }
    },
    '3690': {
      name: '우주의 족쇄',
      description:
        "<passive>기본 지속 효과 - 우주의 족쇄: </passive>사형 선고가 대상의 잃은 체력에 비례해 더 먼 거리에서 끌어당깁니다. 블랙홀을 통과하면 더 큰 피해를 입힐 수 있습니다.<br><br><flavorText>''더 영광스러운 여명이 기다린다.''</flavorText>",
      colloq: ';',
      plaintext: '',
      image: {
        full: '3690.png',
        sprite: 'item2.png',
        group: 'item',
        x: 240,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': false,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {}
    },
    '3691': {
      name: '블랙홀 랜턴',
      description:
        "<passive>기본 지속 효과 - 블랙홀 랜턴: </passive>어둠의 통로 사용 시 자동으로 무력화된 아군을 보호합니다. 보호막은 생성되지 않습니다.<br><br><flavorText>''별이 우리를 부른다.''</flavorText>",
      colloq: ';',
      plaintext: '',
      image: {
        full: '3691.png',
        sprite: 'item2.png',
        group: 'item',
        x: 288,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': false,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {}
    },
    '3692': {
      name: '암흑 물질 낫',
      description:
        "<passive>기본 지속 효과 - 암흑 물질 낫: </passive>사슬 채찍의 기본 지속 효과 추가 피해가 매우 빠르게 증가합니다. 사슬 채찍 사용 시 적의 잃은 체력에 비례해 더 멀리 밀어냅니다.<br><br><flavorText>''아무 것도 없는 무의 상태에서 블랙홀을 만들고 싶다면, 일단 우주부터 파괴해야겠지.''</flavorText>",
      colloq: ';',
      plaintext: '',
      image: {
        full: '3692.png',
        sprite: 'item2.png',
        group: 'item',
        x: 336,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': false,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {}
    },
    '3693': {
      name: '중력의 장화',
      description:
        '<passive>기본 지속 효과 - 질량 변환: </passive>쓰레쉬의 체력에 따라 적을 끌어당기고 밀어내는 거리가 달라집니다. 체력이 낮으면 낮을수록 그 거리가 더 길어집니다.<br><br><passive>기본 지속 효과 - 종말의 생존자: </passive>주기적으로 심연의 바위 게가 나타납니다. 바위 게를 공격하면 암흑의 별을 향해 달려갑니다. 중력 이상 현상이 일어나면 한번에 많은 심연의 바위 게를 끌어들일 수 있습니다.',
      colloq: ';',
      plaintext: '',
      image: {
        full: '3693.png',
        sprite: 'item2.png',
        group: 'item',
        x: 384,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': false,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatMovementSpeedMod: 50
      }
    },
    '3694': {
      name: '별자리 망토',
      description:
        "<passive>기본 지속 효과 - 별의 영혼: </passive>쓰레쉬는 생성 시 대상으로 지정되지 않고 무적 상태가 되어 우주를 돌아다닐 수 있지만 스킬은 사용할 수 없습니다. 안정된 지면에 내려서면 이 효과가 사라집니다.<br><br>어둠의 통로로 보호받거나 사형 선고를 <font color='#3091ec'>중력의 닻</font> 세 개 중 하나에 사용하면 일시적으로 무적 상태에 돌입해 적이 묶은 사슬을 끊어낼 수 있습니다.",
      colloq: ';',
      plaintext: '',
      image: {
        full: '3694.png',
        sprite: 'item2.png',
        group: 'item',
        x: 432,
        y: 48,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': false,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatMovementSpeedMod: 50
      }
    },
    '3695': {
      name: '암흑의 별 인장',
      description:
        '<passive>기본 지속 효과 - 별의 서약: </passive>쓰레쉬는 다른 유닛을 직접 처치할 수 없습니다. 암흑의 별이 모든 영혼과 경험치, 골드를 소유합니다.<br><br>적을 암흑의 별로 끌어당기거나 밀어넣으면 즉시 처치해 +5점을 얻을 수 있습니다.(심연의 바위 게는 +1점을 얻습니다.)<br><br>각 라운드에서 승리하려면 100점을 모아야 하며 승리에 필요한 마지막 점수는 챔피언 처치로 획득해야 합니다.',
      colloq: ';',
      plaintext: '',
      image: {
        full: '3695.png',
        sprite: 'item2.png',
        group: 'item',
        x: 0,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': false,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatMovementSpeedMod: 50
      }
    },
    '3706': {
      name: '추적자의 검',
      description:
        "<groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit><br><br>몬스터 대상 생명력 흡수 +10%<br><br><unique>고유 지속 효과 - 혹한의 강타:</unique> 강타를 적 챔피언에게 사용할 수 있습니다. 적 챔피언에게 사용 시 줄어든 고정 피해를 입히며, 적 챔피언의 이동 속도를 2초간 20% 훔칩니다.<br><unique>고유 지속 효과 - 이빨과 손톱:</unique> 몬스터에게 기본 공격 적중 시 40의 추가 피해를 입힙니다. 몬스터에게 스킬 혹은 공격으로 피해를 주면 5초 동안 30의 체력을 흡수하며 몬스터를 불태워 80의 마법 피해를 줍니다.<mana> 정글 또는 강에 있을 경우 잃은 마나에 비례하여 초당 최대 8의 마나가 회복됩니다.</mana> <font color='#99BBBB'><a href='SpecialJungleExperience'>괴물 사냥꾼</a></font>효과를 얻습니다. 체력이 30%보다 낮으면 회복 효과가 50% 증가됩니다.",
      colloq: ';jungle;Jungle;정글',
      plaintext: '강타를 챔피언에게 사용하여 둔화시킵니다.',
      from: ['1039', '1041'],
      into: ['1401', '1400', '1402', '1416'],
      image: {
        full: '3706.png',
        sprite: 'item2.png',
        group: 'item',
        x: 48,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: [
        'LifeSteal',
        'ManaRegen',
        'Slow',
        'OnHit',
        'NonbootsMovement',
        'Jungle'
      ],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '0.1',
        Effect7Amount: '2',
        Effect8Amount: '-0.2',
        Effect9Amount: '0',
        Effect10Amount: '0',
        Effect11Amount: '0',
        Effect12Amount: '0.3',
        Effect13Amount: '0.5'
      },
      depth: 2
    },
    '3715': {
      name: '척후병의 사브르',
      description:
        "<groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit><br><br>몬스터 대상 생명력 흡수 +10%<br><br><unique>고유 지속 효과 - 승부의 강타:</unique> 강타를 적 챔피언에게 사용하여 4초 동안 표식을 남깁니다. 표식이 있는 동안 대상 기본 공격 시 2.5초에 걸쳐 추가 고정 피해를 입히고, 대상으로부터 입는 피해량은 20% 감소합니다.<br><unique>고유 지속 효과 - 이빨과 손톱:</unique>몬스터에게 기본 공격 적중 시 40의 추가 피해를 입힙니다. 몬스터에게 스킬 혹은 공격으로 피해를 주면 5초 동안 30의 체력을 흡수하며 몬스터를 불태워 80의 마법 피해를 줍니다. 정글 또는 강에 있을 경우 잃은 마나에 비례하여 초당 최대 8의 마나가 회복됩니다. <font color='#99BBBB'><a href='SpecialJungleExperience'>괴물 사냥꾼</a></font>효과를 얻습니다. 체력이 30%보다 낮으면 회복 효과가 50% 증가됩니다.",
      colloq: ';jungle;Jungle;정글',
      plaintext:
        '강타로 챔피언에게 표식을 남겨, 이 챔피언에 대한 전투력을 올려줍니다.',
      from: ['1039', '1041'],
      into: ['1412', '1413', '1414', '1419'],
      image: {
        full: '3715.png',
        sprite: 'item2.png',
        group: 'item',
        x: 96,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 300,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: ['LifeSteal', 'ManaRegen', 'OnHit', 'Jungle'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '4',
        Effect7Amount: '2.5',
        Effect8Amount: '14.5',
        Effect9Amount: '1.5',
        Effect10Amount: '0.2',
        Effect11Amount: '0.1',
        Effect12Amount: '0.3',
        Effect13Amount: '0.5'
      },
      depth: 2
    },
    '3742': {
      name: '망자의 갑옷',
      description:
        "<stats>체력 +425<br>방어력 +60</stats><br><br><unique>고유 지속 효과 - 전함:</unique> 이동 시 추진력 중첩이 쌓여, 100 중첩이 되면 이동 속도가 최대 60까지 상승합니다. 기절, 도발, 공포, 변이, 이동 불가 효과의 영향을 받으면 추진력이 줄어듭니다.<br><unique>고유 지속 효과 - 강력한 일격:</unique> 기본 공격 시 중첩을 모두 방출하며 추진력 중첩 하나당 1의 마법 피해를 입힙니다. 공격자가 근접 챔피언인 경우 중첩이 최대치일 때 대상을 1초 동안 50% 둔화시킵니다.<br><br><flavorText>''내 갑옷을 뺏을 방도는 하나 뿐이다...'' - 무명씨</flavorText>",
      colloq: ';juggernaut;dreadnought',
      plaintext: '이동 시 추진력이 올라 적들을 강하게 타격합니다.',
      from: ['1031', '1011'],
      image: {
        full: '3742.png',
        sprite: 'item2.png',
        group: 'item',
        x: 144,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 1100,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ['Health', 'Armor', 'OnHit', 'NonbootsMovement', 'Bilgewater'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 425,
        FlatArmorMod: 60
      },
      effect: {
        Effect1Amount: '60',
        Effect2Amount: '100',
        Effect3Amount: '1',
        Effect4Amount: '-0.5',
        Effect5Amount: '1'
      },
      depth: 3
    },
    '3748': {
      name: '거대한 히드라',
      description:
        '<stats>체력 +450<br>공격력 +40<br>기본 체력 재생 +100% </stats><br><br><unique>고유 지속 효과 - 베기:</unique> 기본 공격 적중 시 5 + 자신의 최대 체력의 1.5%에 해당하는 추가 물리 피해를  대상에게, 40 + 자신의 최대 체력의 3%에 해당하는 물리 피해를  원뿔 형태의 지역 안에 있는 다른 적들에게 입힙니다.<br><active>고유 사용 효과 - 초승달:</active> 다음 번 기본 공격은 더 큰 원뿔 형태 지역에 적용되며, 베기의 모든 대상에 대한 피해량이 늘어나 40 + 자신의 최대 체력의 10%에 해당하는 추가 물리 피해를  입힙니다. (재사용 대기시간 20초)<br><br><rules>(동일한 이름의 고유 지속 효과와 중첩되지 않습니다.)</rules>',
      colloq: ';juggernaut',
      plaintext: '본인 체력에 비례하여 광역 피해를 입힙니다.',
      from: ['3077', '1028', '3052'],
      image: {
        full: '3748.png',
        sprite: 'item2.png',
        group: 'item',
        x: 192,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 575,
        purchasable: true,
        total: 3500,
        sell: 2450
      },
      tags: ['Health', 'HealthRegen', 'Damage', 'Active', 'OnHit'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 40,
        FlatHPPoolMod: 450
      },
      effect: {
        Effect1Amount: '0.03',
        Effect2Amount: '40',
        Effect3Amount: '0',
        Effect4Amount: '0',
        Effect5Amount: '0.1',
        Effect6Amount: '0',
        Effect7Amount: '20',
        Effect8Amount: '40',
        Effect9Amount: '0.015',
        Effect10Amount: '5'
      },
      depth: 3
    },
    '3751': {
      name: '바미의 불씨',
      description:
        '<stats>체력 +200  </stats><br><br><unique>고유 지속 효과 - 불사르기:</unique> 주변 적을 불태워 초당 <scaleLevel>[6~23]</scaleLevel>의 마법 피해를 입힙니다. 12초에 한 번, 적에게 이동 방해 효과 사용 시 <scaleLevel>[6~23]</scaleLevel><scaleHealth>(+추가 체력의 1%)</scaleHealth>만큼 추가 마법 피해를 입히고 불의 파도가 발생해 주변에 추가 피해를 입힙니다. 불사르기 피해량은 미니언과 몬스터 상대로 100% 증가합니다.',
      colloq: ';',
      plaintext: '체력과 불사르기 오오라를 제공합니다.',
      from: ['1028'],
      into: ['3068', '1401', '1413', '3672', '4103'],
      image: {
        full: '3751.png',
        sprite: 'item2.png',
        group: 'item',
        x: 240,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 900,
        sell: 630
      },
      tags: ['Health'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 200
      },
      effect: {
        Effect1Amount: '6',
        Effect2Amount: '23',
        Effect3Amount: '1',
        Effect4Amount: '325',
        Effect5Amount: '12',
        Effect6Amount: '0.01',
        Effect7Amount: '400'
      },
      depth: 2
    },
    '3800': {
      name: '정당한 영광',
      description:
        '<stats>체력 +400<br><mana>마나 +300</mana><br>방어력 +30<br>기본 체력 재생 +100% <br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 사용 효과:</unique> 적이나 적 포탑 쪽으로 이동할 때는 4초간 이동 속도가 +75% 상승합니다. 적에 근접하거나 4초가 지나면 충격파를 발산하여 2초간 주변 적 챔피언의 이동 속도를 75% 늦춥니다. (재사용 대기시간 90초)',
      colloq: ';',
      plaintext:
        '체력과 마나, 방어력이 증가합니다. 사용하면 적을 향해 갈 때 속도가 상승하며 적을 둔화시킵니다.',
      from: ['3024', '3801'],
      image: {
        full: '3800.png',
        sprite: 'item2.png',
        group: 'item',
        x: 288,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 1100,
        purchasable: true,
        total: 2650,
        sell: 1855
      },
      tags: [
        'Health',
        'HealthRegen',
        'Armor',
        'Mana',
        'Active',
        'CooldownReduction',
        'Slow',
        'NonbootsMovement'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 400,
        FlatMPPoolMod: 300,
        FlatArmorMod: 30
      },
      effect: {
        Effect1Amount: '0.75',
        Effect2Amount: '4',
        Effect3Amount: '-0.75',
        Effect4Amount: '2',
        Effect5Amount: '90',
        Effect6Amount: '225',
        Effect7Amount: '450'
      },
      depth: 3
    },
    '3801': {
      name: '수정 팔 보호구',
      description: '<stats>체력 +200<br>기본 체력 재생 +50% </stats>',
      colloq: ';',
      plaintext: '체력과 체력 재생량이 상승합니다.',
      from: ['1028', '1006'],
      into: ['3084', '3083', '2065', '3800', '3107'],
      image: {
        full: '3801.png',
        sprite: 'item2.png',
        group: 'item',
        x: 336,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 100,
        purchasable: true,
        total: 650,
        sell: 455
      },
      tags: ['Health', 'HealthRegen'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 200
      },
      depth: 2
    },
    '3802': {
      name: '사라진 양피지',
      description:
        '<stats>주문력 +40<br><mana>마나 +300</mana></stats><br><br><unique>고유 지속 효과 - 가속:</unique> 재사용 대기시간 감소 +10%<br><unique>고유 지속 효과:</unique> 레벨이 오를 때마다 3초에 걸쳐 최대 마나의 20%를 회복합니다.',
      colloq: ';',
      plaintext: '레벨이 오를 때마다 마나를 회복합니다.',
      from: ['1052', '1027', '1052'],
      into: ['3003', '3007', '3030', '3285'],
      image: {
        full: '3802.png',
        sprite: 'item2.png',
        group: 'item',
        x: 384,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 80,
        purchasable: true,
        total: 1300,
        sell: 910
      },
      tags: ['SpellDamage', 'Mana', 'ManaRegen', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 300,
        FlatMagicDamageMod: 40
      },
      effect: {
        Effect1Amount: '25',
        Effect2Amount: '-0.1',
        Effect3Amount: '15',
        Effect4Amount: '10',
        Effect5Amount: '20',
        Effect6Amount: '5',
        Effect7Amount: '0.2',
        Effect8Amount: '3'
      },
      depth: 2
    },
    '3812': {
      name: '죽음의 무도',
      description:
        '<stats>공격력 +50<br>방어력 +30<br>마법 저항력 +30<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과:</unique> 적에게 가한 피해량의 15%만큼 체력을 회복합니다. 이 효과는 광역 피해에는 33%만 적용됩니다.<br><unique>고유 지속 효과:</unique> 입은 피해의 <specialRules>30%(근접 챔피언)/10%(원거리 챔피언)</specialRules>가 3초 동안 지속되는 출혈 효과로 전환됩니다.',
      colloq: ';Bloodbag',
      plaintext: '입은 피해 적용이 잠시 미뤄집니다.',
      stacks: 0,
      from: ['3105', '1053', '3133'],
      image: {
        full: '3812.png',
        sprite: 'item2.png',
        group: 'item',
        x: 432,
        y: 96,
        w: 48,
        h: 48
      },
      gold: {
        base: 500,
        purchasable: true,
        total: 3600,
        sell: 2520
      },
      tags: ['SpellBlock', 'Armor', 'Damage', 'LifeSteal', 'CooldownReduction'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 50,
        FlatSpellBlockMod: 30,
        FlatArmorMod: 30
      },
      effect: {
        Effect1Amount: '0.15',
        Effect2Amount: '0.3',
        Effect3Amount: '3',
        Effect4Amount: '0.1'
      },
      depth: 3
    },
    '3814': {
      name: '밤의 끝자락',
      description:
        "<stats>체력 +325<br>공격력 +55</stats><br><br><unique>고유 지속 효과</unique>: <a href='Lethality'>물리 관통력</a> +10<br><unique>고유 지속 효과 - 주문 방어막</unique>: 적의 다음번 스킬 공격을 막아주는 주문 보호막을 부여합니다. 이 보호막은 적 챔피언으로부터 40초 동안 공격받지 않으면 재생성됩니다.",
      colloq: ';물리관통력',
      plaintext: '주기적으로 적 스킬 공격을 막아줍니다.',
      stacks: 0,
      from: ['1037', '3134', '1028'],
      image: {
        full: '3814.png',
        sprite: 'item2.png',
        group: 'item',
        x: 0,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 525,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ['Health', 'Damage', 'ArmorPenetration'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 55,
        FlatHPPoolMod: 325
      },
      effect: {
        Effect1Amount: '10',
        Effect2Amount: '0',
        Effect3Amount: '0',
        Effect4Amount: '40'
      },
      depth: 3
    },
    '3850': {
      name: '주문도둑의 검',
      description:
        "<stats>주문력 +8<br>체력 +10<br>10초당 골드 +2<br><mana>기본 마나 재생 +50% </mana></stats><br><br><unique>고유 지속 효과 - 헌납:</unique> 아군 챔피언 근처에 있을 때, 챔피언과 구조물에 피해를 입히는 스킬을 사용하거나 기본 공격 시 15골드를 획득합니다. 30초당 최대 3번까지만 발동합니다.<hr><passive>퀘스트:</passive> 이 아이템으로 골드를 획득하면 아이템이 변경되며, <active>고유 사용 효과 - 와드 설치</active>를 얻습니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules><br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>",
      colloq: '',
      plaintext:
        '적 챔피언에게 피해를 입히면 골드를 획득하고 업그레이드됩니다.',
      image: {
        full: '3850.png',
        sprite: 'item2.png',
        group: 'item',
        x: 48,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
      },
      tags: ['Health', 'SpellDamage', 'ManaRegen', 'Vision', 'GoldPer', 'Lane'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 10,
        FlatMagicDamageMod: 8
      },
      effect: {
        Effect1Amount: '2',
        Effect2Amount: '15',
        Effect3Amount: '15',
        Effect4Amount: '500',
        Effect5Amount: '10',
        Effect6Amount: '3',
        Effect7Amount: '2000'
      }
    },
    '3851': {
      name: '얼음 송곳니',
      description:
        "<stats>주문력 +15<br>체력 +70<br>10초당 골드 +3<br><mana>기본 마나 재생 +75% </mana></stats><br><br><unique>고유 지속 효과 - 헌납:</unique> 아군 챔피언 근처에 있을 때, 챔피언과 구조물에 피해를 입히는 스킬을 사용하거나 기본 공격 시 15골드를 획득합니다. 30초당 최대 3번까지만 발동합니다.<br><br><passive>퀘스트:</passive> 1000골드를 획득하면 얼음 정수의 파편으로 업그레이드됩니다.<br><br><active>고유 사용 효과 - 와드 설치:</active> <font color='#FF9900'>투명 와드</font>를 설치합니다. 상점 방문 시 3회의 충전량이 다시 채워집니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules>",
      colloq: '',
      plaintext: '',
      specialRecipe: 3850,
      inStore: false,
      image: {
        full: '3851.png',
        sprite: 'item2.png',
        group: 'item',
        x: 96,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ['GoldPer', 'Lane', 'ManaRegen', 'SpellDamage'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 70,
        FlatMagicDamageMod: 15
      },
      effect: {
        Effect1Amount: '3',
        Effect2Amount: '15',
        Effect3Amount: '15',
        Effect4Amount: '1000',
        Effect5Amount: '10',
        Effect6Amount: '3',
        Effect7Amount: '2000'
      }
    },
    '3853': {
      name: '얼음 정수의 파편',
      description:
        "<stats>주문력 +50<br>체력 +100<br>10초당 골드 +3<br><mana>기본 마나 재생 +100% </mana></stats><br><br><active>고유 사용 효과 - 와드 설치:</active> <font color='#FF9900'>투명 와드</font>를 설치합니다. 상점 방문 시 4회의 충전량이 다시 채워집니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules>",
      colloq: '',
      plaintext: '',
      specialRecipe: 3851,
      inStore: false,
      image: {
        full: '3853.png',
        sprite: 'item2.png',
        group: 'item',
        x: 144,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ['GoldPer', 'Lane', 'ManaRegen', 'SpellDamage'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 100,
        FlatMagicDamageMod: 50
      },
      effect: {
        Effect1Amount: '3'
      }
    },
    '3854': {
      name: '강철 어깨 보호대',
      description:
        "<stats>체력 +30<br>공격력 +3<br>10초당 골드 +2<br>기본 체력 재생 +25% </stats><br><br><unique>고유 지속 효과 - 전리품:</unique> 아군 챔피언 근처에 있으면 챔피언의 기본 공격이 최대 체력의 50% (원거리 챔피언의 경우 30%) 이하인 미니언을 즉시 처형하고 가장 가까운 아군 챔피언과 함께 골드를 획득합니다.<rules> (이 효과는 45초마다 재충전됩니다. 최대 충전량 3회)</rules><hr><passive>퀘스트:</passive> 이 아이템으로 골드를 획득하면 아이템이 변경되며, <active>고유 사용 효과 - 와드 설치</active>를 얻습니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules><br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>",
      colloq: '',
      plaintext:
        '아군과 함께 미니언을 처치하면 골드를 획득하고 업그레이드됩니다.',
      image: {
        full: '3854.png',
        sprite: 'item2.png',
        group: 'item',
        x: 192,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
      },
      tags: ['Health', 'HealthRegen', 'Damage', 'Vision', 'GoldPer', 'Lane'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 3,
        FlatHPPoolMod: 30
      },
      effect: {
        Effect1Amount: '2',
        Effect2Amount: '0.5',
        Effect3Amount: '0.3',
        Effect4Amount: '500',
        Effect5Amount: '45',
        Effect6Amount: '3'
      }
    },
    '3855': {
      name: '룬 강철 어깨 갑옷',
      description:
        "<stats>체력 +100<br>공격력 +6<br>10초당 골드 +3<br>기본 체력 재생 +50% </stats><br><br><unique>고유 지속 효과 - 전리품:</unique> 아군 챔피언 근처에 있으면 챔피언의 기본 공격이 최대 체력의 50% 이하인 미니언을 즉시 처형하고 가장 가까운 아군 챔피언과 함께 골드를 획득합니다.<rules> (이 효과는 45초마다 재충전됩니다. 최대 충전량 3회)</rules><br><br><passive>퀘스트:</passive> 1000골드를 획득하면 화이트록의 갑옷으로 업그레이드됩니다.<br><br><active>고유 사용 효과 - 와드 설치:</active> <font color='#FF9900'>투명 와드</font>를 설치합니다. 상점 방문 시 3회의 충전량이 다시 채워집니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules>",
      colloq: '',
      plaintext: '',
      specialRecipe: 3854,
      inStore: false,
      image: {
        full: '3855.png',
        sprite: 'item2.png',
        group: 'item',
        x: 240,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ['Health', 'HealthRegen', 'GoldPer', 'Lane'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 6,
        FlatHPPoolMod: 100
      },
      effect: {
        Effect1Amount: '3',
        Effect2Amount: '0.5',
        Effect3Amount: '0.5',
        Effect4Amount: '1000',
        Effect5Amount: '45',
        Effect6Amount: '3'
      }
    },
    '3857': {
      name: '화이트록의 갑옷',
      description:
        "<stats>체력 +300<br>공격력 +15<br>10초당 골드 +3<br>기본 체력 재생 +100% </stats><br><br><active>고유 사용 효과 - 와드 설치:</active> <font color='#FF9900'>투명 와드</font>를 설치합니다. 상점 방문 시 4회의 충전량이 다시 채워집니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules>",
      colloq: '',
      plaintext: '',
      specialRecipe: 3855,
      inStore: false,
      image: {
        full: '3857.png',
        sprite: 'item2.png',
        group: 'item',
        x: 288,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ['Health', 'HealthRegen', 'GoldPer', 'Lane'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 15,
        FlatHPPoolMod: 300
      },
      effect: {
        Effect1Amount: '3'
      }
    },
    '3858': {
      name: '고대유물 방패',
      description:
        "<stats>체력 +30<br>주문력 +5<br>10초당 골드 +2<br>기본 체력 재생 +25% </stats><br><br><unique>고유 지속 효과 - 전리품:</unique> 아군 챔피언 근처에 있으면 챔피언의 기본 공격이 최대 체력의 50% (원거리 챔피언의 경우 30%) 이하인 미니언을 즉시 처형하고 가장 가까운 아군 챔피언과 함께 골드를 획득합니다.<rules> (이 효과는 45초마다 재충전됩니다. 최대 충전량 3회)</rules><hr><passive>퀘스트:</passive> 이 아이템으로 골드를 획득하면 아이템이 변경되며, <active>고유 사용 효과 - 와드 설치</active>를 얻습니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules><br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>",
      colloq: '',
      plaintext:
        '아군과 함께 미니언을 처치하면 골드를 획득하고 업그레이드됩니다.',
      image: {
        full: '3858.png',
        sprite: 'item2.png',
        group: 'item',
        x: 336,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
      },
      tags: [
        'Health',
        'HealthRegen',
        'SpellDamage',
        'Vision',
        'GoldPer',
        'Lane'
      ],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 30,
        FlatMagicDamageMod: 5
      },
      effect: {
        Effect1Amount: '2',
        Effect2Amount: '0.5',
        Effect3Amount: '0.3',
        Effect4Amount: '500',
        Effect5Amount: '45',
        Effect6Amount: '3'
      }
    },
    '3859': {
      name: '타곤 산의 방패',
      description:
        "<stats>체력 +100<br>주문력 +10<br>10초당 골드 +3<br>기본 체력 재생 +50% </stats><br><br><unique>고유 지속 효과 - 전리품:</unique> 아군 챔피언 근처에 있으면 챔피언의 기본 공격이 최대 체력의 50% 이하인 미니언을 즉시 처형하고 가장 가까운 아군 챔피언과 함께 골드를 획득합니다.<rules> (이 효과는 45초마다 재충전됩니다. 최대 충전량 3회)</rules><br><br><passive>퀘스트:</passive> 1000골드를 획득하면 타곤 산의 방벽으로 업그레이드됩니다.<br><br><active>고유 사용 효과 - 와드 설치:</active> <font color='#FF9900'>투명 와드</font>를 설치합니다. 상점 방문 시 3회의 충전량이 다시 채워집니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules>",
      colloq: '',
      plaintext: '',
      specialRecipe: 3858,
      inStore: false,
      image: {
        full: '3859.png',
        sprite: 'item2.png',
        group: 'item',
        x: 384,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ['Health', 'HealthRegen', 'GoldPer', 'Lane'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 100,
        FlatMagicDamageMod: 10
      },
      effect: {
        Effect1Amount: '3',
        Effect2Amount: '0.5',
        Effect3Amount: '0.5',
        Effect4Amount: '1000',
        Effect5Amount: '45',
        Effect6Amount: '3'
      }
    },
    '3860': {
      name: '타곤 산의 방벽',
      description:
        "<stats>체력 +300<br>주문력 +25<br>10초당 골드 +3<br>기본 체력 재생 +100% </stats><br><br><active>고유 사용 효과 - 와드 설치:</active> <font color='#FF9900'>투명 와드</font>를 설치합니다. 상점 방문 시 4회의 충전량이 다시 채워집니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules>",
      colloq: '',
      plaintext: '',
      specialRecipe: 3859,
      inStore: false,
      image: {
        full: '3860.png',
        sprite: 'item2.png',
        group: 'item',
        x: 432,
        y: 144,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ['Health', 'HealthRegen', 'GoldPer', 'Lane'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 300,
        FlatMagicDamageMod: 25
      },
      effect: {
        Effect1Amount: '3'
      }
    },
    '3862': {
      name: '영혼의 낫',
      description:
        "<stats>공격력 +5<br>체력 +10<br>10초당 골드 +2<br><mana>기본 마나 재생 +25% </mana></stats><br><br><unique>고유 지속 효과 - 헌납:</unique> 아군 챔피언 근처에 있을 때, 챔피언과 구조물에 피해를 입히는 스킬을 사용하거나 기본 공격 시 15골드를 획득합니다. 30초당 최대 3번까지만 발동합니다.<hr><passive>퀘스트:</passive> 이 아이템으로 골드를 획득하면 아이템이 변경되며, <active>고유 사용 효과 - 와드 설치</active>를 얻습니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules><br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>",
      colloq: '',
      plaintext:
        '적 챔피언에게 피해를 입히면 골드를 획득하고 업그레이드됩니다.',
      image: {
        full: '3862.png',
        sprite: 'item2.png',
        group: 'item',
        x: 0,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
      },
      tags: ['Health', 'Damage', 'ManaRegen', 'Vision', 'GoldPer', 'Lane'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 5,
        FlatHPPoolMod: 10
      },
      effect: {
        Effect1Amount: '2',
        Effect2Amount: '15',
        Effect3Amount: '15',
        Effect4Amount: '500',
        Effect5Amount: '10',
        Effect6Amount: '3',
        Effect7Amount: '2000'
      }
    },
    '3863': {
      name: '해로윙 초승달낫',
      description:
        "<stats>공격력 +10<br>체력 +60<br>10초당 골드 +3<br><mana>기본 마나 재생 +50% </mana></stats><br><br><unique>고유 지속 효과 - 헌납:</unique> 아군 챔피언 근처에 있을 때, 챔피언과 구조물에 피해를 입히는 스킬을 사용하거나 기본 공격 시 15골드를 획득합니다. 30초당 최대 3번까지만 발동합니다.<br><br><passive>퀘스트:</passive> 1000골드를 획득하면 검은 안개 낫으로 업그레이드됩니다.<br><br><active>고유 사용 효과 - 와드 설치:</active> <font color='#FF9900'>투명 와드</font>를 설치합니다. 상점 방문 시 3회의 충전량이 다시 채워집니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules>",
      colloq: '',
      plaintext: '',
      specialRecipe: 3862,
      inStore: false,
      image: {
        full: '3863.png',
        sprite: 'item2.png',
        group: 'item',
        x: 48,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ['Health', 'ManaRegen', 'GoldPer', 'Lane'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 10,
        FlatHPPoolMod: 60
      },
      effect: {
        Effect1Amount: '3',
        Effect2Amount: '15',
        Effect3Amount: '15',
        Effect4Amount: '1000',
        Effect5Amount: '10',
        Effect6Amount: '3',
        Effect7Amount: '2000'
      }
    },
    '3864': {
      name: '검은 안개 낫',
      description:
        "<stats>공격력 +25<br>체력 +100<br>10초당 골드 +3<br><mana>기본 마나 재생 +100% </mana></stats><br><br><active>고유 사용 효과 - 와드 설치:</active> <font color='#FF9900'>투명 와드</font>를 설치합니다. 상점 방문 시 4회의 충전량이 다시 채워집니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules>",
      colloq: '',
      plaintext: '',
      specialRecipe: 3863,
      inStore: false,
      image: {
        full: '3864.png',
        sprite: 'item2.png',
        group: 'item',
        x: 96,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
      },
      tags: ['Health', 'ManaRegen', 'GoldPer', 'Lane'],
      maps: {
        '11': true,
        '12': false,
        '21': false,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 25,
        FlatHPPoolMod: 100
      },
      effect: {
        Effect1Amount: '3'
      }
    },
    '3901': {
      name: '가차없는 포격',
      description:
        '바다뱀 은화 500닢이 필요합니다.<br><br><unique>고유 지속 효과:</unique> 이제 포탄 세례가 시간이 갈수록 빠르게 발사됩니다. (지속시간 동안 추가 6차례 발사)',
      colloq: '',
      plaintext: '포탄 세례의 포격 횟수가 늘어납니다.',
      consumed: true,
      consumeOnFull: true,
      requiredChampion: 'Gangplank',
      image: {
        full: '3901.png',
        sprite: 'item2.png',
        group: 'item',
        x: 144,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {}
    },
    '3902': {
      name: '죽음의 여신',
      description:
        '바다뱀 은화 500닢이 필요합니다.<br><br><unique>고유 지속 효과:</unique> 포탄 세례가 범위 중앙에 추가로 대형 포탄을 하나 발사하여 300%의 고정 피해를 입히고 1.5초간 60% 둔화를 적용합니다. ',
      colloq: '',
      plaintext: '포탄 세례로 대형 포탄을 발사합니다.',
      consumed: true,
      consumeOnFull: true,
      requiredChampion: 'Gangplank',
      image: {
        full: '3902.png',
        sprite: 'item2.png',
        group: 'item',
        x: 192,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {}
    },
    '3903': {
      name: '사기진작',
      description:
        '바다뱀 은화 500닢이 필요합니다.<br><br><unique>고유 지속 효과:</unique> 포탄 세례 범위 안의 아군은 이제 2초간 이동 속도가 30% 상승합니다.',
      colloq: '',
      plaintext: '포탄 세례로 아군의 속도를 상승시킵니다.',
      consumed: true,
      consumeOnFull: true,
      requiredChampion: 'Gangplank',
      image: {
        full: '3903.png',
        sprite: 'item2.png',
        group: 'item',
        x: 240,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
      },
      tags: [],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {}
    },
    '3905': {
      name: '쌍둥이 그림자',
      description:
        '<stats>주문력 +70<br>이동 속도 +7%<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 사용 효과: 유령의 추격</unique> 으스스한 유령 2마리를 소환해 주변의 적 챔피언을 찾게 합니다. 유령은 접촉한 적의 모습을 드러냅니다. <br><br>유령과 접촉한 적은 유령의 이동 거리에 따라 최대 5초 동안 40% 둔화됩니다. (재사용 대기시간 90초)',
      colloq: ';쌍둥이;그림자;유령;twin;shadow;ts',
      plaintext: '주문력과 이동 속도가 증가합니다.',
      from: ['3108', '3113'],
      image: {
        full: '3905.png',
        sprite: 'item2.png',
        group: 'item',
        x: 288,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 650,
        purchasable: true,
        total: 2400,
        sell: 1680
      },
      tags: [
        'SpellDamage',
        'Active',
        'CooldownReduction',
        'Slow',
        'NonbootsMovement'
      ],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        PercentMovementSpeedMod: 0.07,
        FlatMagicDamageMod: 70
      },
      effect: {
        Effect1Amount: '10',
        Effect2Amount: '35',
        Effect3Amount: '8',
        Effect4Amount: '0.2',
        Effect5Amount: '0.5',
        Effect6Amount: '10',
        Effect7Amount: '2100',
        Effect8Amount: '10',
        Effect9Amount: '90',
        Effect10Amount: '60',
        Effect11Amount: '150',
        Effect12Amount: '0.1',
        Effect13Amount: '40',
        Effect14Amount: '5',
        Effect15Amount: '2',
        Effect16Amount: '7'
      },
      depth: 3
    },
    '3907': {
      name: '주문매듭 구슬',
      description:
        '<stats>주문력 +120<br>이동 속도 +10%<br></stats><br><unique>고유 지속 효과:</unique> 근처 아군과 적이 스킬을 사용하면 주문매듭 구슬이 충전됩니다. (최대 충전량 100회) <br><unique>고유 사용 효과:</unique> 4초 동안 주문력이 최대 80만큼 증가하며 이동 속도가 50% 증가했다가 점차 줄어듭니다. <br><br>충전량 1회당 주문력 +0.8 및 이동 속도 +0.5%의 효과를 받습니다. (재사용 대기시간 60초)',
      colloq: '',
      plaintext:
        '근처에서 스킬이 사용되면 충전되며, 사용 시 이동 속도와 주문력이 증가합니다.',
      from: ['1058', '3113'],
      image: {
        full: '3907.png',
        sprite: 'item2.png',
        group: 'item',
        x: 336,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 800,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ['SpellDamage', 'Active', 'NonbootsMovement'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        PercentMovementSpeedMod: 0.1,
        FlatMagicDamageMod: 120
      },
      effect: {
        Effect1Amount: '10',
        Effect2Amount: '100',
        Effect3Amount: '0.5',
        Effect4Amount: '4',
        Effect5Amount: '0.8',
        Effect6Amount: '60',
        Effect7Amount: '4',
        Effect8Amount: '80',
        Effect9Amount: '50',
        Effect10Amount: '120',
        Effect11Amount: '1800'
      },
      depth: 3
    },
    '3916': {
      name: '망각의 구',
      description:
        "<stats>주문력 +20<br>체력 +200</stats><br><br><unique>고유 지속 효과- 죽음의 감촉:</unique> <a href='FlatMagicPen'>마법 관통력</a> +15",
      colloq: '',
      plaintext: '마법 피해량이 증가합니다.',
      stacks: 0,
      from: ['1028', '1052'],
      into: ['3165'],
      image: {
        full: '3916.png',
        sprite: 'item2.png',
        group: 'item',
        x: 384,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 765,
        purchasable: true,
        total: 1600,
        sell: 1120
      },
      tags: ['Health', 'MagicPenetration', 'SpellDamage'],
      maps: {
        '11': true,
        '12': true,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 200,
        FlatMagicDamageMod: 20
      },
      effect: {
        Effect1Amount: '15'
      },
      depth: 2
    },
    '4001': {
      name: '유령 장화 (근접 전용)',
      description:
        '<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><unique>고유 사용 효과:</unique> 유령이 되어 6초 동안 지형지물과의 충돌을 무시합니다. 지형을 통과하는 동안 250의 추가 이동 속도를 얻으며, 대상으로 지정할 수 없고, 은신 및 침묵 상태가 됩니다. 피해를 입으면 3초 동안은 사용할 수 없습니다. (재사용 대기시간 80초)<br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45<br><br><rules>(유령 장화에는 포식자 룬 효과가 적용되지 않습니다.)</rules>',
      colloq: ';',
      plaintext: '이동 속도가 상승하며 잠시 동안 벽을 통과할 수 있습니다.',
      from: ['1001'],
      image: {
        full: '4001.png',
        sprite: 'item2.png',
        group: 'item',
        x: 432,
        y: 192,
        w: 48,
        h: 48
      },
      gold: {
        base: 700,
        purchasable: true,
        total: 1000,
        sell: 700
      },
      tags: ['Boots'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatMovementSpeedMod: 45
      },
      effect: {
        Effect1Amount: '6',
        Effect2Amount: '125',
        Effect3Amount: '250',
        Effect4Amount: '80',
        Effect5Amount: '3'
      },
      depth: 2
    },
    '4003': {
      name: '생명선',
      description:
        "<stats>공격력 +20</stats><br><br><unique>고유 지속 효과:</unique> <a href='Lethality'>물리 관통력</a> +8<br><unique>고유 사용 효과:</unique> 발 아래 지면에 표식을 남깁니다. 4초 후 표식을 남긴 위치로 순간이동합니다. (재사용 대기시간 120초)",
      colloq: ';물리 관통력',
      plaintext:
        '지면에 표식을 남깁니다. 잠시 후 해당 표식으로 순간이동합니다.',
      from: ['1036', '2420'],
      into: ['4004'],
      image: {
        full: '4003.png',
        sprite: 'item2.png',
        group: 'item',
        x: 0,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 550,
        purchasable: true,
        total: 1550,
        sell: 1085
      },
      tags: ['Damage', 'NonbootsMovement', 'ArmorPenetration'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 20
      },
      effect: {
        Effect1Amount: '8',
        Effect2Amount: '4',
        Effect3Amount: '120'
      },
      depth: 2
    },
    '4004': {
      name: '망령 해적검',
      description:
        "<stats>공격력 +70</stats><br><br><unique>고유 지속 효과:</unique> <a href='Lethality'>물리 관통력</a> +18<br><unique>고유 사용 효과:</unique> 현재 위치에 표식을 남깁니다. 4초 후 표식을 남긴 위치로 순간이동합니다. (재사용 대기시간 60초)",
      colloq: ';물리 관통력',
      plaintext:
        '지면에 표식을 남깁니다. 잠시 후 해당 표식으로 순간이동합니다.',
      from: ['4003', '3134'],
      image: {
        full: '4004.png',
        sprite: 'item2.png',
        group: 'item',
        x: 48,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 3050,
        sell: 2135
      },
      tags: ['Armor', 'Damage', 'NonbootsMovement', 'ArmorPenetration'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 70
      },
      effect: {
        Effect1Amount: '18',
        Effect2Amount: '4',
        Effect3Amount: '60'
      },
      depth: 3
    },
    '4101': {
      name: '맹수 추적자의 검',
      description:
        '<unique>고유 지속 효과 - 이빨과 손톱:</unique> 몬스터에게 기본 공격 적중 시 40의 추가 피해를 입힙니다. 몬스터에게 스킬 혹은 공격으로 피해를 주면 5초 동안 30의 체력을 흡수하며 몬스터를 불태워 80의 마법 피해를 줍니다.<mana> 정글 또는 강에 있을 경우 잃은 마나에 비례하여 초당 최대 8의 마나가 회복됩니다.</mana><br><br><groupLimit>시작 아이템 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: ';jungle;Jungle;정글',
      plaintext: '몬스터를 더 빠르게 처치합니다.',
      into: ['4102', '4103', '4104', '4105'],
      image: {
        full: '4101.png',
        sprite: 'item2.png',
        group: 'item',
        x: 96,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 315
      },
      tags: [
        'LifeSteal',
        'ManaRegen',
        'Slow',
        'OnHit',
        'NonbootsMovement',
        'Jungle'
      ],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {},
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '0',
        Effect7Amount: '2',
        Effect8Amount: '-0.2'
      }
    },
    '4102': {
      name: '마법 부여: 용사',
      description:
        '<stats>공격력 +65<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 혹한의 강타:</unique> 강타를 적 챔피언에게 사용할 수 있습니다. 적 챔피언에게 사용 시 줄어든 고정 피해를 입히며, 적 챔피언의 이동 속도를 2초간 20% 훔칩니다.<br><br><groupLimit>시작 아이템 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: '',
      plaintext: '엄청난 피해를 입힙니다.',
      from: ['3133', '4101'],
      hideFromAll: true,
      image: {
        full: '4102.png',
        sprite: 'item2.png',
        group: 'item',
        x: 144,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 1075,
        purchasable: true,
        total: 2625,
        sell: 1838
      },
      tags: [],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 65
      },
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '0',
        Effect7Amount: '2',
        Effect8Amount: '-0.2'
      },
      depth: 3
    },
    '4103': {
      name: '마법 부여: 잿불거인',
      description:
        '<stats>체력 +350<br>추가 체력 +10%</stats><br><br><unique>고유 지속 효과 - 불사르기:</unique> 전투 중일 때 근처 적에게 초당 11(+챔피언 레벨당 1)의 마법 피해를 입힙니다. 미니언 및 몬스터에게는 200%의 추가 피해를 입힙니다.<br><br><unique>고유 지속 효과 - 혹한의 강타:</unique> 강타를 적 챔피언에게 사용할 수 있습니다. 적 챔피언에게 사용 시 줄어든 고정 피해를 입히며, 적 챔피언의 이동 속도를 2초간 20% 훔칩니다.<br><br><groupLimit>시작 아이템 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: '',
      plaintext: '추가 체력이 증가하고 주변 적을 붙태웁니다.',
      from: ['3751', '4101'],
      hideFromAll: true,
      image: {
        full: '4103.png',
        sprite: 'item2.png',
        group: 'item',
        x: 192,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 1275,
        purchasable: true,
        total: 2625,
        sell: 1838
      },
      tags: [],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 350
      },
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '0',
        Effect7Amount: '2',
        Effect8Amount: '-0.2'
      },
      depth: 3
    },
    '4104': {
      name: '마법 부여: 룬의 메아리',
      description:
        '<stats>주문력 +80<br>재사용 대기시간 감소 +10%<br><mana>마나 +300</mana></stats><br><br><unique>고유 지속 효과 - 메아리:</unique> 이동하거나 스킬을 사용하면 중첩이 쌓입니다. 중첩이 100회 쌓이면 다음에 스킬로 피해를 입혔을 때 중첩을 모두 소모하여 최대 4명의 대상에게 60(+주문력의 10%)의 추가 마법 피해를 입힙니다.<br><br>대형 몬스터에게는 250%의 피해를 입히며, 이 효과가 대형 몬스터에게 적중하면 잃은 마나의 25%를 회복합니다.<br><br><unique>고유 지속 효과 - 혹한의 강타:</unique> 강타를 적 챔피언에게 사용할 수 있습니다. 적 챔피언에게 사용 시 줄어든 고정 피해를 입히며, 적 챔피언의 이동 속도를 2초간 20% 훔칩니다.<br><br><groupLimit>시작 아이템 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: '',
      plaintext: '스킬이 폭발해 추가 피해를 입힙니다.',
      from: ['3108', '1027', '4101'],
      hideFromAll: true,
      image: {
        full: '4104.png',
        sprite: 'item2.png',
        group: 'item',
        x: 240,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 925,
        purchasable: true,
        total: 2625,
        sell: 1838
      },
      tags: [],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatMPPoolMod: 300,
        FlatMagicDamageMod: 80
      },
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '0',
        Effect7Amount: '2',
        Effect8Amount: '-0.2'
      },
      depth: 3
    },
    '4105': {
      name: '마법 부여: 피갈퀴손',
      description:
        '<stats>공격 속도 +50%</stats><br><br><unique>고유 지속 효과:</unique> 기본 공격 적중 시 대상 최대 체력의 4%만큼 추가 물리 피해를 입힙니다. (몬스터와 미니언 상대로 최대 75)<br><br><unique>고유 지속 효과 - 혹한의 강타:</unique> 강타를 적 챔피언에게 사용할 수 있습니다. 적 챔피언에게 사용 시 줄어든 고정 피해를 입히며, 적 챔피언의 이동 속도를 2초간 20% 훔칩니다.<br><br><groupLimit>시작 아이템 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: '',
      plaintext: '공격 시 대상의 최대 체력에 비례해 추가 피해를 입힙니다.',
      from: ['1043', '4101'],
      hideFromAll: true,
      image: {
        full: '4105.png',
        sprite: 'item2.png',
        group: 'item',
        x: 288,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 1175,
        purchasable: true,
        total: 2625,
        sell: 1838
      },
      tags: [],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        PercentAttackSpeedMod: 0.5
      },
      effect: {
        Effect1Amount: '80',
        Effect2Amount: '30',
        Effect3Amount: '5',
        Effect4Amount: '8',
        Effect5Amount: '40',
        Effect6Amount: '0.1',
        Effect7Amount: '2',
        Effect8Amount: '-0.2'
      },
      depth: 3
    },
    '4201': {
      name: '도란의 잃어버린 방패',
      description:
        '<stats>체력 +100</stats><br><br><passive>기본 지속 효과: </passive>매 5초마다 15의 체력을 회복합니다.<br><passive>기본 지속 효과: </passive>미니언에게 기본 공격 적중 시 5의 추가 물리 피해를 입힙니다.<br><unique>고유 지속 효과:</unique> 적 챔피언에게 피해를 입으면 10초 동안 20의 체력을 추가로 회복합니다.<br><br><groupLimit>시작 아이템 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: ';도란방패;방패;dshield;doran;shield',
      plaintext: '방어에 특화된 시작 아이템입니다.',
      image: {
        full: '4201.png',
        sprite: 'item2.png',
        group: 'item',
        x: 336,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 180
      },
      tags: ['Health', 'HealthRegen', 'Lane'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 100,
        FlatHPRegenMod: 3
      },
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '10',
        Effect3Amount: '5',
        Effect4Amount: '2'
      }
    },
    '4202': {
      name: '도란의 잃어버린 검',
      description:
        '<stats>공격력 +8<br>체력 +80<br>생명력 흡수 +8%</stats><br><br><groupLimit>시작 아이템 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: ';도란칼',
      plaintext: '공격에 특화된 시작 아이템입니다.',
      image: {
        full: '4202.png',
        sprite: 'item2.png',
        group: 'item',
        x: 384,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 180
      },
      tags: ['Damage', 'Health', 'Lane', 'LifeSteal'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 8,
        FlatHPPoolMod: 80,
        PercentLifeStealMod: 0.08
      },
      effect: {
        Effect1Amount: '10'
      }
    },
    '4203': {
      name: '도란의 잃어버린 반지',
      description:
        '<stats>체력 +60<br>주문력 +15<br><mana>5초당 마나 재생 +10</mana></stats><br><br><passive>기본 지속 효과: </passive>미니언에게 기본 공격 적중 시 5의 추가 물리 피해를 입힙니다.<br><br><groupLimit>시작 아이템 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: ';도란링;dring;doran;ring',
      plaintext: '스킬 사용에 특화된 시작 아이템입니다.',
      image: {
        full: '4203.png',
        sprite: 'item2.png',
        group: 'item',
        x: 432,
        y: 240,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
      },
      tags: ['Health', 'Lane', 'ManaRegen', 'SpellDamage'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatHPPoolMod: 60,
        FlatMagicDamageMod: 15
      },
      effect: {
        Effect1Amount: '0',
        Effect2Amount: '5'
      }
    },
    '4204': {
      name: '도란의 잃어버린 우상',
      description:
        '<stats>주문력 +10<br><mana>기본 마나 재생 +75% </mana><br>보호막 및 체력 회복 +5%</stats><br><br><passive>기본 지속 효과: </passive>미니언에게 기본 공격 적중 시 12의 추가 물리 피해를 입힙니다.<br><br><groupLimit>시작 아이템 개수는 1개로 제한됩니다.</groupLimit>',
      colloq: ';도란우상',
      plaintext: '지원 및 강화에 특화된 시작 아이템입니다.',
      image: {
        full: '4204.png',
        sprite: 'item2.png',
        group: 'item',
        x: 0,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
      },
      tags: ['SpellDamage', 'ManaRegen', 'Lane'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatMagicDamageMod: 10
      },
      effect: {
        Effect1Amount: '0.05',
        Effect2Amount: '12'
      }
    },
    '4401': {
      name: '대자연의 힘',
      description:
        '<stats>마법 저항력 +90<br>기본 체력 재생 +200% <br>이동 속도 +8%</stats><br><br><unique>고유 지속 효과:</unique> 매초 최대 체력의 1.5%를 회복합니다.',
      colloq: ';대자연의 힘',
      plaintext:
        '이동 속도와 마법 저항력이 증가하고 최대 체력에 비례해 체력을 재생합니다.',
      from: ['1057', '1057', '1006', '1006'],
      image: {
        full: '4401.png',
        sprite: 'item2.png',
        group: 'item',
        x: 48,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 1160,
        purchasable: true,
        total: 2900,
        sell: 2030
      },
      tags: ['SpellBlock', 'HealthRegen', 'NonbootsMovement'],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        PercentMovementSpeedMod: 0.08,
        FlatSpellBlockMod: 90
      },
      effect: {
        Effect1Amount: '0.015'
      },
      depth: 3
    },
    '4402': {
      name: '활력증진의 보석함',
      description:
        "<stats>체력 +400<br><mana>마나 +300</mana><br>공격력 +30<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 영원:</unique> 챔피언으로부터 입은 피해의 15%를 마나로 돌려받습니다. 마나 소모 시 20%를 체력으로 돌려받습니다. (스킬 사용 1회당 최대 25까지)<br><br><unique>고유 지속 효과:</unique> 스킬을 사용한 후 3초 동안 잃은 체력의 8%와 잃은 마나의 3%를 회복합니다.<br><br><rules><font color='#447777'>''녹서스인들에게 파멸을'' - 사원 경비병 밥디르</font></rules>",
      colloq: ';',
      plaintext: '스킬 사용 시 체력을 회복합니다.',
      from: ['3010', '3133'],
      image: {
        full: '4402.png',
        sprite: 'item2.png',
        group: 'item',
        x: 96,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 600,
        purchasable: true,
        total: 2800,
        sell: 1960
      },
      tags: [
        'Health',
        'HealthRegen',
        'Damage',
        'Mana',
        'ManaRegen',
        'CooldownReduction'
      ],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 30,
        FlatHPPoolMod: 400,
        FlatMPPoolMod: 300
      },
      effect: {
        Effect1Amount: '3',
        Effect2Amount: '0.08',
        Effect3Amount: '0.03',
        Effect4Amount: '25',
        Effect5Amount: '0.2',
        Effect6Amount: '0.15'
      },
      depth: 3
    },
    '4403': {
      name: '황금 뒤집개',
      description:
        "<stats>체력 +250<br><mana>마나 +250</mana><br>기본 체력 재생 +100% <br><mana>기본 마나 재생 +100% </mana><br>방어력 +30<br>마법 저항력 +30<br>주문력 +120<br>공격력 +70<br>공격 속도 +50%<br>치명타 확률 +30%<br>생명력 흡수 +10%<br>이동 속도 +10%<br>재사용 대기시간 감소 +20%<br><br>영구히 불타오릅니다!</stats><br><br><rules><font color='#447777'>''무슨 쓸모가 있을 텐데...''<br>''거절한다, 이건 만능이라고!''</font></rules>",
      colloq: ';',
      plaintext: '만능 아이템입니다!',
      from: ['1038', '1053', '3086', '1058', '3067', '3105'],
      image: {
        full: '4403.png',
        sprite: 'item2.png',
        group: 'item',
        x: 144,
        y: 288,
        w: 48,
        h: 48
      },
      gold: {
        base: 687,
        purchasable: true,
        total: 7437,
        sell: 5206
      },
      tags: [
        'Health',
        'SpellBlock',
        'HealthRegen',
        'Armor',
        'Damage',
        'CriticalStrike',
        'AttackSpeed',
        'LifeSteal',
        'SpellDamage',
        'Mana',
        'ManaRegen',
        'CooldownReduction',
        'NonbootsMovement'
      ],
      maps: {
        '11': false,
        '12': false,
        '21': true,
        '22': false
      },
      stats: {
        FlatPhysicalDamageMod: 70,
        FlatCritChanceMod: 0.3,
        PercentMovementSpeedMod: 0.1,
        FlatHPPoolMod: 250,
        FlatSpellBlockMod: 30,
        FlatMPPoolMod: 250,
        FlatMagicDamageMod: 120,
        FlatArmorMod: 30,
        PercentAttackSpeedMod: 0.5,
        PercentLifeStealMod: 0.1
      },
      depth: 3
    }
  },
  groups: [
    {
      id: 'HuntersTalismanGroup',
      MaxGroupOwnable: '1'
    },
    {
      id: 'HuntersMacheteGroup',
      MaxGroupOwnable: '1'
    },
    {
      id: 'BaseJungleItems',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'Boots',
      MaxGroupOwnable: '1'
    },
    {
      id: 'BootsOfSpeed',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'BootsWithoutActives',
      MaxGroupOwnable: '1'
    },
    {
      id: 'BuildsFromStopwatchGroup',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'Consumable',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'Default',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'DoransItems',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'Elixir',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'GangplankRUpgrade01',
      MaxGroupOwnable: '1'
    },
    {
      id: 'GangplankRUpgrade02',
      MaxGroupOwnable: '1'
    },
    {
      id: 'GangplankRUpgrade03',
      MaxGroupOwnable: '1'
    },
    {
      id: 'GoldItems',
      MaxGroupOwnable: '1'
    },
    {
      id: 'GuardianItems',
      MaxGroupOwnable: '1'
    },
    {
      id: 'ItemGroupSwapToSummonerDot',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'ItemGroupSwapToSummonerFlash',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'ItemGroupSwapToSummonerHaste',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'ItemGroupSwapToSummonerHeal',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'ItemGroupSwapToSummonerSmite',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'ItemGroupSwapToSummonerTeleport',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'JungleEnchantments',
      MaxGroupOwnable: '1'
    },
    {
      id: 'JungleItems',
      MaxGroupOwnable: '1'
    },
    {
      id: 'LegendaryClearingItems',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'LethalityItems',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'NewDoransItems',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'NonItem',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'OdysseySustainItems',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'OrnnItems',
      MaxGroupOwnable: '1'
    },
    {
      id: 'PerksElixir',
      MaxGroupOwnable: '0'
    },
    {
      id: 'PerksElixirAdvanced',
      MaxGroupOwnable: '0'
    },
    {
      id: 'Potion',
      MaxGroupOwnable: '1'
    },
    {
      id: 'SLIMEStarterItems',
      MaxGroupOwnable: '1'
    },
    {
      id: 'SiegeEmergencyShieldGroup',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'SiegeFlashZoneGroup',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'SiegeLaserAffixGroup',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'SiegeMissileBarrageGroup',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'SiegePortableBarracksGroup',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'SiegeRefundGroup',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'SiegeShieldGeneratorGroup',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'SiegeSniperCannonGroup',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'SiegeTeleportPadGroup',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'SiegeTimefieldGroup',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'SightstoneActiveItems',
      MaxGroupOwnable: '1'
    },
    {
      id: 'SightstoneDisableGroup',
      MaxGroupOwnable: '0'
    },
    {
      id: 'StopwatchGroup',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'TearItems',
      MaxGroupOwnable: '1'
    },
    {
      id: 'TheBlackSpear',
      MaxGroupOwnable: '1'
    },
    {
      id: 'TotalBiscuit',
      MaxGroupOwnable: '0'
    },
    {
      id: 'Trinket',
      MaxGroupOwnable: '-1'
    },
    {
      id: 'ViktorHexCore',
      MaxGroupOwnable: '1'
    },
    {
      id: 'WardGreen',
      MaxGroupOwnable: '1'
    },
    {
      id: 'WardPink',
      MaxGroupOwnable: '1'
    }
  ],
  tree: [
    {
      header: 'START',
      tags: ['LANE', 'JUNGLE']
    },
    {
      header: 'TOOLS',
      tags: ['GOLDPER', 'CONSUMABLE', 'VISION']
    },
    {
      header: 'DEFENSE',
      tags: ['HEALTH', 'HEALTHREGEN', 'ARMOR', 'SPELLBLOCK']
    },
    {
      header: 'ATTACK',
      tags: ['LIFESTEAL', 'CRITICALSTRIKE', 'ATTACKSPEED', 'DAMAGE']
    },
    {
      header: 'MAGIC',
      tags: ['MANA', 'SPELLDAMAGE', 'COOLDOWNREDUCTION', 'MANAREGEN']
    },
    {
      header: 'MOVEMENT',
      tags: ['BOOTS', 'NONBOOTSMOVEMENT']
    },
    {
      header: 'UNCATEGORIZED',
      tags: [
        'ACTIVE',
        'MAGICPENETRATION',
        'ARMORPENETRATION',
        'AURA',
        'ONHIT',
        'TRINKET',
        'SLOW',
        'STEALTH',
        'SPELLVAMP',
        'TENACITY'
      ]
    }
  ]
};
