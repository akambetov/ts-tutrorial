type PcBrand = {
  name: string,
  country: string,
  createdAt: Date
}

type WellKnownBrands = 'apple' | 'lenovo' | 'msi' | 'asus'

type MyPcRecord = {
  [BrandKey in WellKnownBrands]?: PcBrand
}

const brandRecord: MyPcRecord ={
  apple: {
    country: 'USA',
    name: 'mac book',
    createdAt: new Date()
  }
}

function printPcCatalor(pcCatalog: MyPcRecord) {
  console.log(pcCatalog.apple?.name)
}

printPcCatalor(brandRecord)

// ------------------------

type PartOfWindow = {
  [Key in 'document' | 'screen'| 'navigator']?: Window[Key]
}

const p: PartOfWindow = {
  // window нет в node среде
  document: window.document
}

export {}