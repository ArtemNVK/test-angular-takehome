export const AeroflotTariffs = 
    {
        tariffs: [
            {
                name: 'Эконом',
                pricePerKm: 4,
                freeLuggage: 5,
                maxLuggage: 20,
                pricePerLuggageGreaterThanFreeLuggage: 4000,
            },
            {
                name: 'Продвинутый',
                pricePerKm: 8,
                freeLuggage: 20,
                maxLuggage: 50,
                pricePerLuggageGreaterThanFreeLuggage: 5000,
                discount: {
                    age: 7,
                    percent: 30,
                }
            },
            {
                name: 'Люкс',
                pricePerKm: 15,
                freeLuggage: 50,
                maxLuggage: 50,
                pricePerLuggageGreaterThanFreeLuggage: 0,
                discount: {
                    age: 16,
                    percent: 30,
                }
            },
        ]
    };

export const RailroadTariffs = 
    {
        tariffs: [
            {
                name: 'Эконом',
                pricePerKm: 0.5,
                freeLuggage: 15,
                maxLuggage: 50,
                pricePer1kgLuggageGreaterThanFreeLuggage: 50,
                discount: {
                    age: 5,
                    percent: 50,
                }
            },
            {
                name: 'Продвинутый',
                pricePerKm: 2,
                freeLuggage: 20,
                maxLuggage: 60,
                pricePer1kgLuggageGreaterThanFreeLuggage: 50,
                discount: {
                    age: 8,
                    percent: 30,
                }
            },
            {
                name: 'Люкс',
                pricePerKm: 4,
                freeLuggage: 60,
                maxLuggage: 60,
                pricePer1kgLuggageGreaterThanFreeLuggage: 0,
                discount: {
                    age: 16,
                    percent: 20,
                }
            },
        ]
    }
